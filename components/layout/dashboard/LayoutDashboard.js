import Cookies from "js-cookie"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../../../store/user/UserSlice"
import DashboardLoading from "../../sharedUi/DashboardLoading"
import DesktopHeader from "./header/DesktopHeader"
import PhoneHeader from "./header/PhoneHeader"
import SideBarDesktop from "./header/SideBarDesktop"
import NavigationBottomDashboard from "./NavigationBottomDashboard"


function LayoutDashboard({ children }) {

    const { user } = useSelector(state => state);
    const dispatch = useDispatch();
    const userDetails = user.userDetails;
    const token = Cookies.get('car_ghazizadeh');
    useEffect(() => {
        if (token) dispatch(getUser(token))
    }, [])


    if (userDetails === null) return <DashboardLoading />
    return (
        <>
            <PhoneHeader />
            <div className="grid grid-cols-9">
                <div className="hidden lg:flex lg:col-span-2 bg-[#FFFFFF] h-screen overflow-scroll p-8">
                    <SideBarDesktop />
                </div>
                <div className="col-span-9 lg:col-span-7 h-screen overflow-scroll p-4 max-w-7xl">
                    <DesktopHeader />
                    <div className="lg:mt-8 mb-24">
                        {children}
                    </div>
                </div>
            </div>
            <NavigationBottomDashboard />
        </>
    )
}

export default LayoutDashboard