import Link from "next/link";
import { BASE_API_IMAGE } from "../../../utils/baseApi";
import TitleSection from "../../sharedUi/TitleSection";




const AccessoriesMe = ({ category }) => {

    const subCategory = category.subs;

    return (
        <>
            <TitleSection
                title={category.title}
                span
            />
            <div className="flex flex-col lg:grid lg:grid-cols-3 grid-rows-2 gap-4 h-[424px]">
                <Link href={`/products?category=${subCategory[0].id}`} className={`relative grid-cols-1 lg:row-span-2 rounded-xl overflow-hidden bg-center bg-cover h-full`} style={{ backgroundImage: `url(${BASE_API_IMAGE}${subCategory[0].logo})` }}>
                    <div className="bg-black-rgba py-6 absolute bottom-0 w-full px-4">
                        <span className="text-white font-bold"> {subCategory[0].title} </span>
                    </div>
                </Link>
                <Link href={`/products?category=${subCategory[1].id}`} className="relative grid-cols-1 rounded-xl overflow-hidden bg-center bg-cover h-full" style={{ backgroundImage: `url(${BASE_API_IMAGE}${subCategory[1].logo})` }}>
                    <div className="bg-black-rgba py-6 absolute bottom-0 w-full px-4">
                        <span className="text-white font-bold"> {subCategory[1].title} </span>
                    </div>
                </Link>
                <Link href={`/products?category=${subCategory[2].id}`} className="relative grid-cols-1 lg:col-start-2 row-start-2 rounded-xl overflow-hidden bg-center bg-cover h-full" style={{ backgroundImage: `url(${BASE_API_IMAGE}${subCategory[2].logo})` }}>
                    <div className="bg-black-rgba py-6 absolute bottom-0 w-full px-4">
                        <span className="text-white font-bold"> {subCategory[2].title} </span>
                    </div>
                </Link>
                <Link href={`/products?category=${subCategory[3].id}`} className="relative grid-cols-1 lg:row-span-2 col-start-3 row-start-1 rounded-xl overflow-hidden bg-center bg-cover h-full" style={{ backgroundImage: `url(${BASE_API_IMAGE}${subCategory[3].logo})` }}>
                    <div className="bg-black-rgba py-6 absolute bottom-0 w-full px-4">
                        <span className="text-white font-bold"> {subCategory[3].title} </span>
                    </div>
                </Link>
            </div>



        </>
    );
}

export default AccessoriesMe;