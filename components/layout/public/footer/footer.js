import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import http from "../../../../utils/httpService";


const Footer = () => {

    const [loading, setLoading] = useState(true);
    const [footerDetails, setFooterDetails] = useState();

    useEffect(() => {
        (
            async () => {
                const res = await http.get('/siteinfo/footer/');
                setFooterDetails(res.data);
                setLoading(false);
            }
        )()
    }, [])

    if (loading) return null
    return (
        <div className="bg-[#FFFFFF] mt-14 p-4 lg:py-16 lg:px-14 py-32">
            <ul className="flex flex-col gap-y-6 lg:flex-row lg:justify-between">
                <li className="lg:w-1/4">
                    <span className="font-bold text-[19px]"> {footerDetails.heading} </span>
                    <br />
                    <span className="text-[14px]">
                        {footerDetails.paragraph}
                    </span>
                </li>
                <li className="flex justify-between items-start lg:w-1/4">
                    <ul>
                        <li>
                            <span className="font-bold text-[16px]">دسترسی ها</span>
                        </li>
                        <li className="mt-4">
                            <Link href='/'>
                                <span className="text-[14px] text-[#444444]"> خانه </span>
                            </Link>
                        </li>
                        <li className="mt-4">
                            <Link href='/about_us'>
                                <span className="text-[14px] text-[#444444]"> درباره ما </span>
                            </Link>
                        </li>
                        <li className="mt-4">
                            <Link href='/contact_us'>
                                <span className="text-[14px] text-[#444444]"> ارتباط با ما </span>
                            </Link>
                        </li>
                        <li className="mt-4">
                            <Link href='/store'>
                                <span className="text-[14px] text-[#444444]"> فروشگاه </span>
                            </Link>
                        </li>
                        <li className="mt-4">
                            <Link href='/all_cars'>
                                <span className="text-[14px] text-[#444444]"> معرفی خودرو ها </span>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li className="mt-4">
                            <span className="font-bold text-[16px]">خدمات مشتریان</span>
                        </li>
                        <li className="mt-4">
                            <Link href='/terms'>
                                <span className="text-[14px] text-[#444444]"> شرایط و قوانین </span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span className="font-bold text-[16px]">راه های ارتباطی</span>
                    <ul className="flex gap-x-4 justify-start items-center mt-2">
                        {
                            footerDetails.instagram &&
                            <li>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 8C0 4.22876 0 2.34315 1.17157 1.17157C2.34315 0 4.22876 0 8 0H10C13.7712 0 15.6569 0 16.8284 1.17157C18 2.34315 18 4.22876 18 8V10C18 13.7712 18 15.6569 16.8284 16.8284C15.6569 18 13.7712 18 10 18H8C4.22876 18 2.34315 18 1.17157 16.8284C0 15.6569 0 13.7712 0 10V8ZM15 4.5C15 5.32843 14.3284 6 13.5 6C12.6716 6 12 5.32843 12 4.5C12 3.67157 12.6716 3 13.5 3C14.3284 3 15 3.67157 15 4.5ZM11 10C11 11.1046 10.1046 12 9 12C7.89543 12 7 11.1046 7 10C7 8.89543 7.89543 8 9 8C10.1046 8 11 8.89543 11 10ZM13 10C13 12.2091 11.2091 14 9 14C6.79086 14 5 12.2091 5 10C5 7.79086 6.79086 6 9 6C11.2091 6 13 7.79086 13 10Z" fill="#AAAAAA" />
                                </svg>
                            </li>
                        }
                        {
                            footerDetails.telegram &&
                            <li>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_139_608)">
                                        <path d="M16.1572 5.32801C16.1677 5.48626 16.1677 5.64526 16.1677 5.80501C16.1677 10.6853 12.4522 16.3125 5.66025 16.3125V16.3095C3.654 16.3125 1.689 15.738 0 14.6543C0.29175 14.6895 0.585 14.7068 0.879 14.7075C2.5425 14.709 4.158 14.151 5.46525 13.1235C3.885 13.0935 2.499 12.063 2.01525 10.5585C2.56875 10.665 3.13875 10.6433 3.6825 10.4955C1.959 10.1475 0.72 8.63326 0.72 6.87526C0.72 6.85951 0.72 6.84376 0.72 6.82876C1.23375 7.11526 1.80825 7.27351 2.39625 7.29076C0.77325 6.20701 0.27225 4.04851 1.2525 2.36101C3.1275 4.66801 5.89425 6.07051 8.8635 6.21976C8.56575 4.93726 8.973 3.59326 9.9315 2.69101C11.4187 1.29226 13.758 1.36426 15.1567 2.85151C15.984 2.68876 16.7768 2.38501 17.502 1.95526C17.226 2.81026 16.6493 3.53626 15.8783 3.99826C16.611 3.91051 17.3258 3.71476 18 3.41626C17.5042 4.15801 16.8802 4.80526 16.1572 5.32801Z" fill="#AAAAAA" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_139_608">
                                            <rect width="18" height="18" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </li>
                        }

                    </ul>
                </li>
                <li className="flex justify-start items-center gap-x-4">
                    {/* <div className="border rounded-xl justify-center items-center p-4">
                        <Image
                            src='/images/logo1.png'
                            width="100"
                            height="100"
                        />
                    </div>
                    <div className="border rounded-xl justify-center items-center p-4">
                        <Image
                            src='/images/rezi.png'
                            width="100"
                            height="100"
                        />
                    </div> */}
                </li>
            </ul>
        </div>
    );
}


export default Footer;