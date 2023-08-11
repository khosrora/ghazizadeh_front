import FilterModal from './Modals/FilterModal'
import SearchBarCards from './SearchBarCards'
import SearchPageSideBar from './SearchPageSideBar'

function GridSearchPage({ props }) {

    return (
        <>
            <div className="lg:grid lg:grid-cols-10 lg:gap-x-4 lg:mt-12">
                <div className="hidden lg:p-2 lg:flex lg:col-span-3">
                    <SearchPageSideBar categories={props.categories} />
                </div>
                <div className="lg:col-span-7">
                    <div className="hidden lg:flex justify-start gap-x-4">
                        <span>مرتب سازی : </span>
                        <div className="flex justify-start items-center gap-x-4 text-xs">
                            <span className='cursor-pointer'> جدیدترین </span>
                            <span className='cursor-pointer'> پرفروش ترین </span>
                            <span className='cursor-pointer'> محبوب ترین </span>
                            <span className='cursor-pointer'> گران ترین </span>
                            <span className='cursor-pointer'> ارزان ترین </span>
                        </div>
                    </div>
                    <SearchBarCards products={props.products.results} />
                </div>
            </div>
            <FilterModal />
        </>
    )
}

export default GridSearchPage