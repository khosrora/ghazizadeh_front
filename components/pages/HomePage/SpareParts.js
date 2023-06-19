import Image from "next/image";
import TitleSection from "../../sharedUi/TitleSection";




const SpareParts = () => {
    return (
        <>
            <TitleSection
                span
                title="لوازم یدکی"
                url="/"
            />
            <div className="grid grid-cols-2 gap-2 gap-y-6 md:grid-cols-3 lg:grid-cols-6">
                {
                    [1, 2, 3, 4, 5, 6].map(i =>
                        <div key={i} className="flex flex-col justify-center items-center gap-y-4 border-l">
                            <div className="bg-[#FFFFFF] p-2 rounded-full">
                                <Image
                                    src="/others/spare.png"
                                    width="100"
                                    height="100"
                                />
                            </div>
                            <span className="font-bold">لوازم یدکی</span>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default SpareParts;