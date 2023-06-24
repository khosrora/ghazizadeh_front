import Search from "../../sharedUi/Search";




const HeaderHomePage = () => {
    return (
        <div className="mt-6 px-4 flex flex-col justify-center items-center w-full md:items-start md:w-1/2">
            <div className="flex flex-col">
                <p className="font-bold text-[24px] lg:text-[32px]">گروه خودرویی غازی زاده</p>
                <p className="mt-2 text-[16px] leading-9 lg:text-[24px]">
                    انواع لوازم یدکی با کیفیت و لوازم تزئینی خفن رو به راحتی جست و جو و خرید کن
                </p>
            </div>
            <Search />
        </div>
    );
}

export default HeaderHomePage;