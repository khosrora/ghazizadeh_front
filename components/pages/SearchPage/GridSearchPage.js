import { useRouter } from 'next/router'
import { buildURLQuery } from '../../../utils/functions'
import Alert from '../../sharedUi/Alert'
import FilterModal from './Modals/FilterModal'
import SearchBarCards from './SearchBarCards'
import SearchPageSideBar from './SearchPageSideBar'

function GridSearchPage({ props }) {

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
                        props.products.results === undefined || props.products.results.length === 0 ? <Alert message='در این دسته هیج محصولی ثبت نشده است' /> :
                            <>
                                <div className="hidden lg:flex justify-start gap-x-4">
                                    <span>مرتب سازی : </span>
                                    <div className="flex justify-start items-center gap-x-4 text-xs">
                                        <span onClick={() => handleSearch({ ordering: 'created_date' })} className='cursor-pointer'> جدیدترین </span>
                                        <span onClick={() => handleSearch({ ordering: '-created_date' })} className='cursor-pointer'> قدیمی ترین </span>
                                        <span onClick={() => handleSearch({ ordering: 'order_count' })} className='cursor-pointer'> پرفروش ترین </span>
                                        <span onClick={() => handleSearch({ ordering: '-price' })} className='cursor-pointer'> گران ترین </span>
                                        <span onClick={() => handleSearch({ ordering: 'price' })} className='cursor-pointer'> ارزان ترین </span>
                                    </div>
                                </div>
                                <SearchBarCards products={props.products.results} />
                            </>
                    }
                </div>
            </div>
            <FilterModal categories={props.categories} />
        </>
    )
}

export default GridSearchPage