import Link from "next/link";




const TitleSection = ({ title, url }) => {
    return (
        <div className="w-full my-4 mt-12 flex justify-between items-center px-4">
            <p className="font-bold text-[19px]"> {title} </p>
            <Link href={`${url}`}>
                <span className="text-[#1A858C]"> مشاهده همه </span>
            </Link>
        </div>
    );
}

export default TitleSection;