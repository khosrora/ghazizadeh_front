import IndexAuth from "./AuthModal/IndexAuth";
import Footer from "./footer/footer";
import NavbarDesktop from "./header/NavbarDesktop";
import NavbarPhone from "./header/NavbarPhone";
import NavigationBottom from "./NavigationBottom";

const PublicLayout = ({ children }) => {
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