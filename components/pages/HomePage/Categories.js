import TitleSection from "../../sharedUi/TitleSection";
import { BASE_API_IMAGE } from "../../../utils/baseApi";
import Link from "next/link";




const Categories = ({ category }) => {


    return (
        <>
            <TitleSection
                title={category.title}
                url="/products"
            />
            <div className="grid grid-cols-2 gap-2 gap-y-6 md:grid-cols-3 lg:grid-cols-6">
                {
                    category.subs.map(i =>
                        <Link href={`/products?category=${i.id}`} key={i.id} className="flex flex-col justify-center items-center gap-y-4 border-l">
                            <div className="bg-[#FFFFFF] p-4 rounded-full">
                                <img
                                    src={`${BASE_API_IMAGE}${i.logo}`}
                                    width="80"
                                    height="80"
                                    title={i.title}
                                />
                            </div>
                            <span className="font-bold">{i.title}</span>
                        </Link>
                    )
                }
            </div>
        </>
    );
}

export default Categories;