import Link from "next/link";
import { NavbarItems } from "./../../../Constance/NavbarItems";
import BasketLogo from "../../../sharedUi/BasketLogo.js";
import Logo from "../../../sharedUi/Logo.js";
import { resetForm } from "../../../../store/user/UserSlice";
import { useDispatch, useSelector } from "react-redux";




const NavbarDesktop = () => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state);
    const load = user.loading;
    const userDetails = user.userDetails;


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
                                <Link href={item.url}>
                                    <p className="text-[14px]">{item.title}</p>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className={`flex justify-between items-center ${load ? 'blur-sm' : ''}`}>
                {
                    userDetails === null ?
                        <button className="btn bg-[#EA0028] text-white rounded-full mr-4 w-32" onClick={() => {
                            window.my_modal_2.showModal()
                            dispatch(resetForm())
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6801 14.62L14.2401 12.06L11.6801 9.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 12.06H14.17" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-thin">ورود</span>
                        </button>
                        :
                        <>
                            <BasketLogo />
                            <Link href='/dashboard' className="btn bg-[#EA0028] text-white rounded-full mr-4 w-32">
                                <span className="font-thin">پنل کاربری</span>
                            </Link>
                        </>
                }
            </div>
        </div>
    );
}

export default NavbarDesktop;