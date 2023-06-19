



const HeaderHomePage = () => {
    return (
        <div className="mt-6 px-4 flex flex-col justify-center items-center w-full md:items-start md:w-1/2">
            <div className="flex flex-col">
                <p className="font-bold text-[24px] lg:text-[32px]">گروه خودرویی غازی زاده</p>
                <p className="mt-2 text-[16px] leading-9 lg:text-[24px]">
                    انواع لوازم یدکی با کیفیت و لوازم تزئینی خفن رو به راحتی جست و جو و خرید کن
                </p>
            </div>
            <div className="w-full h-[48px] rounded-full p-2 overflow-hidden relative mt-4">
                <input
                    type="text"
                    placeholder="نام محصول خود را جست و جو کنید"
                    className="absolute top-0 left-0 right-0 bottom-0 text-xs focus:outline-none px-3"
                />
                <div className="bg-[#EA0028] rounded-full p-2 absolute left-2 top-1.5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.58332 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58334C17.5 5.21108 13.9556 1.66667 9.58332 1.66667C5.21107 1.66667 1.66666 5.21108 1.66666 9.58334C1.66666 13.9556 5.21107 17.5 9.58332 17.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.3333 18.3333L16.6667 16.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default HeaderHomePage;