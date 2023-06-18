import Image from "next/image";
import TitleSection from "../../sharedUi/TitleSection";
import HeaderHomePage from "./HeaderHomePage";
import SuggestSection from "./SuggestSection";


const IndexPage = () => {
    return (
        <div className="p-2">
            <div className="flex flex-col justify-center items-center  lg:mt-8 md:flex-row-reverse md:justify-between md:items-center">
                <div className="">
                    <Image
                        src="/images/heading.png"
                        width="400"
                        height="400"
                        alt="car-image"
                    />
                </div>
                <HeaderHomePage />
            </div>
            <TitleSection
                title="معرفی خودروها"
                url="/"
            />
            <SuggestSection />
            <div className="h-96"></div>
        </div>
    );
}

export default IndexPage;