import { useSelector } from "react-redux";
import BasketLogo from "../../../sharedUi/BasketLogo.js";
import DrawerMenu from "../../../sharedUi/DrawerMenu.js";
import Logo from "../../../sharedUi/Logo.js";




const NavbarPhone = () => {

    const { user } = useSelector(state => state);
    const userDetails = user.userDetails;

    return (
        <div className="w-full p-4 flex justify-between items-center lg:hidden">
            <div className="flex justify-center items-center">
                <DrawerMenu />
                <Logo />
            </div>
            {
                userDetails === null ? '' :
                    <BasketLogo />
            }
        </div>
    );
}

export default NavbarPhone;