import Image from "next/image";
import Accessories from "./AccessoriesMe";
import BlogSection from "./BlogSection";
import CarAccessories from "./CarAccessories";
import Consumables from "./Consumables";
import HeaderHomePage from "./HeaderHomePage";
import SpareParts from "./SpareParts";
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
            <SuggestSection />
            <CarAccessories />
            <SpareParts />
            <Accessories />
            <Consumables />
            <BlogSection />
        </div>
    );
}

export default IndexPage;