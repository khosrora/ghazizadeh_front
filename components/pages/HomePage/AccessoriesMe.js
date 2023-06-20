import Image from "next/image";
import Link from "next/link";
import TitleSection from "../../sharedUi/TitleSection";




const AccessoriesMe = () => {
    return (
        <>
            <TitleSection
                title="لوازم جانبی خودرو"
                span
            />
            <div className="lg:hidden">
                <div className="grid grid-cols-2 gap-4">
                    {
                        [1, 2, 3, 4].map(i =>
                            <div key={i} className="bg-[#FFFFFF] rounded-xl p-4 flex flex-col justify-between items-center gap-y-6">
                                <Image
                                    src='/others/chair.png'
                                    width='100'
                                    height='200'
                                />
                                <span className="text-[14px]">روکش صندلی ماشین</span>
                                <Link href="/">
                                    <span className="btn text-[#EA0028] rounded-full text-[12px]">مشاهده محصولات</span>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-4 lg:h-[424px]">
                <div className="relative row-span-2 rounded-xl overflow-hidden bg-cover bg-[url('https://wallpapercave.com/wp/wp8301150.jpg')]">
                    <div className="bg-black-rgba py-6 absolute bottom-0 w-full px-4">
                        <span className="text-white font-bold"> روکش صندلی خودرو </span>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden bg-cover bg-[url('https://wallpapercave.com/dwp2x/wp8301190.jpg')]">
                    <div className="bg-black-rgba py-6 absolute bottom-0 w-full px-4">
                        <span className="text-white font-bold"> لوازم صوتی وتصویری </span>
                    </div>
                </div>
                <div className="relative col-start-2 row-start-2 rounded-xl overflow-hidden bg-cover bg-[url('https://wallpapercave.com/dwp2x/wp8301168.jpg')]">
                    <div className="bg-black-rgba py-6 absolute bottom-0 w-full px-4">
                        <span className="text-white font-bold"> سایر لوازم خودرو </span>
                    </div>
                </div>
                <div className="relative row-span-2 col-start-3 row-start-1 rounded-xl overflow-hidden bg-cover bg-[url('https://wallpapercave.com/dwp2x/wp8301149.jpg')]">
                    <div className="bg-black-rgba py-6 absolute bottom-0 w-full px-4">
                        <span className="text-white font-bold"> لوازم تزیینی خودرو </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccessoriesMe;