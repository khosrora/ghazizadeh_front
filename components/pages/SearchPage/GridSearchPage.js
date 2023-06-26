import FilterModal from './Modals/FilterModal'
import SearchBarCards from './SearchBarCards'
import SearchPageSideBar from './SearchPageSideBar'

function GridSearchPage() {
    return (
        <>
            <div className="lg:grid lg:grid-cols-10 lg:gap-x-4 lg:mt-12">
                <div className="hidden lg:p-2 lg:flex lg:col-span-3">
                    <SearchPageSideBar />
                </div>
                <div className="lg:col-span-7">
                    <div className="hidden lg:flex justify-start gap-x-4">
                        <span>مرتب سازی : </span>
                        <div className="flex justify-start items-center gap-x-4 text-xs">
                            <span> جدیدترین </span>
                            <span> پرفروش ترین </span>
                            <span> محبوب ترین </span>
                            <span> گران ترین </span>
                            <span> ارزان ترین </span>
                        </div>
                    </div>
                    <SearchBarCards />
                </div>
            </div>
            <FilterModal />
        </>
    )
}

export default GridSearchPage