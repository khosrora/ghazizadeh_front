import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { buildURLQuery } from '../../../utils/functions'
import Alert from '../../sharedUi/Alert'
import FilterModal from './Modals/FilterModal'
import SearchBarCards from './SearchBarCards'
import SearchPageSideBar from './SearchPageSideBar'
import { getPublicState } from './../../../store/public/publicSlice'

function GridSearchPage({ props, hasMore, setHasMore }) {

    const { products } = useSelector(getPublicState);

    const router = useRouter();
    const { query } = router;

    const handleSearch = (searchQuery) => {
        delete query.ordering;
        const params = buildURLQuery(Object.assign(query, searchQuery));
        router.push(`/products?${params}`)
    }

    return (
        <>
            <div className="lg:grid lg:grid-cols-10 lg:gap-x-4 lg:mt-12">
                <div className="hidden lg:p-2 lg:flex lg:col-span-3">
                    <SearchPageSideBar categories={props.categories} />
                </div>
                <div className="lg:col-span-7">
                    {
                        products === undefined || products.length === 0 ? <Alert message='در این دسته هیج محصولی ثبت نشده است' /> :
                            <>
                                <div className="hidden lg:flex justify-start gap-x-4">
                                    <span>مرتب سازی : </span>
                                    <div className="flex justify-start items-center gap-x-4 text-xs">
                                        <span onClick={() => handleSearch({ ordering: '-created_date' })} className={`${query.ordering === '-created_date' ? 'bg-red-600 p-2 rounded-full text-white' : ''} cursor-pointer`}> جدیدترین </span>
                                        <span onClick={() => handleSearch({ ordering: 'created_date' })} className={`${query.ordering === 'created_date' ? 'bg-red-600 p-2 rounded-full text-white' : ''} cursor-pointer`}> قدیمی ترین </span>
                                        <span onClick={() => handleSearch({ ordering: 'order_count' })} className={`${query.ordering === 'order_count' ? 'bg-red-600 p-2 rounded-full text-white' : ''} cursor-pointer`}> پرفروش ترین </span>
                                        <span onClick={() => handleSearch({ ordering: '-price' })} className={`${query.ordering === '-price' ? 'bg-red-600 p-2 rounded-full text-white' : ''} cursor-pointer`}> گران ترین </span>
                                        <span onClick={() => handleSearch({ ordering: 'price' })} className={`${query.ordering === 'price' ? 'bg-red-600 p-2 rounded-full text-white' : ''} cursor-pointer`}> ارزان ترین </span>
                                    </div>
                                </div>
                                <SearchBarCards
                                    hasMore={hasMore}
                                    setHasMore={setHasMore}
                                    products={products}
                                    count={props.products.count}
                                    nextPage={props.products.links.next}
                                />
                            </>
                    }
                </div>
            </div>
            <FilterModal categories={props.categories} />
        </>
    )
}

export default GridSearchPage