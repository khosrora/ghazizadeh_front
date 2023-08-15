import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BasketName, setBasketLists } from "../../../store/basket/BasketSlice";
import { getUser } from "../../../store/user/UserSlice";
import IndexAuth from "./AuthModal/IndexAuth";
import Footer from "./footer/footer";
import NavbarDesktop from "./header/NavbarDesktop";
import NavbarPhone from "./header/NavbarPhone";
import NavigationBottom from "./NavigationBottom";

const PublicLayout = ({ children }) => {

    const dispatch = useDispatch();
    const token = Cookies.get('car_ghazizadeh');

    const basket = Cookies.get(BasketName);

    useEffect(() => {
        if (token) dispatch(getUser(token))
        if (!!basket) {
            dispatch(setBasketLists(JSON.parse(basket)))
        }else {
            Cookies.set(BasketName, JSON.stringify([]))
        }
    }, [token])



    return (
        <>
            <IndexAuth />
            <div className="max-w-7xl m-auto">
                <NavbarPhone />
                <NavbarDesktop />
                <div className="mt-4">
                    {children}
                </div>
            </div>
            <Footer />
            <NavigationBottom />
        </>
    );
}

export default PublicLayout;