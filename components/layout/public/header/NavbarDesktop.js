import Link from "next/link";
import { NavbarItems } from "./../../../Constance/NavbarItems";
import BasketLogo from "./../../../shared/basketLogo";
import Logo from "./../../../shared/Logo";




const NavbarDesktop = () => {
    return (
        <div className="max-w-7xl m-auto hidden p-2 lg:flex justify-between items-center">
            <div className="">
                <Logo />
            </div>
            <div className="">
                <ul className="flex justify-between gap-x-8">
                    {
                        NavbarItems.map(item =>
                            <li key={item.id}>
                                <Link href="/">
                                    <p className="text-[14px]">{item.title}</p>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="flex justify-between items-center">
                <BasketLogo />
                <button className="btn bg-[#EA0028] text-white rounded-full mr-4 w-32">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6801 14.62L14.2401 12.06L11.6801 9.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 12.06H14.17" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-thin">ورود</span>
                </button>
            </div>
        </div>
    );
}

export default NavbarDesktop;