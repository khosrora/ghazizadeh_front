import Search from "../../sharedUi/Search";




const HeaderHomePage = ({ headerDetails }) => {
    return (
        <div className="mt-6 px-4 flex flex-col justify-center items-center w-full md:items-start md:w-1/2">
            <div className="flex flex-col">
                <p className="font-bold text-[24px] lg:text-[32px]">{headerDetails.heading}</p>
                <p className="mt-2 text-[16px] leading-9 lg:text-[24px]">
                    {headerDetails.paragraph}
                </p>
            </div>
            <Search />
        </div>
    );
}

export default HeaderHomePage;