import Link from "next/link";




const TitleSection = ({ title, url, span }) => {

    return (
        <div className="w-full my-12 flex justify-between items-center px-4">
            <p className="font-bold text-[19px]"> {title} </p>
            {
                !!span ?
                    null
                    :
                    <Link title={title} href={`${url}`}>
                        <span className="text-[#1A858C]"> مشاهده همه </span>
                    </Link>
            }
        </div>
    );
}

export default TitleSection;