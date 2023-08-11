import Image from "next/image";
import { Suspense } from "react";
import Accessories from "./AccessoriesMe";
import BlogSection from "./BlogSection";
import CarAccessories from "./CarAccessories";
import HeaderHomePage from "./HeaderHomePage";
import Categories from "./Categories";
import SuggestSection from "./SuggestSection";


const IndexPage = ({ props }) => {

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
                <HeaderHomePage headerDetails={props.header} />
            </div>
            <SuggestSection banners={props.banners} />
            <Suspense fallback={null}>
                <CarAccessories />
            </Suspense>
            {

                props.categories.map(category => category.is_cart ? <Accessories key={category.id} category={category} /> : <Categories key={category.id} category={category} />)
            }
            <Suspense>
                <BlogSection />
            </Suspense>
        </div>
    );
}

export default IndexPage;