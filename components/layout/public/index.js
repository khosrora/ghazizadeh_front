import NavbarDesktop from "./header/NavbarDesktop";
import NavbarPhone from "./header/NavbarPhone";

const PublicLayout = ({ children }) => {
    return (
        <div className="max-w-7xl m-auto">
            <NavbarPhone />
            <NavbarDesktop />
            <div className="mt-4">
                {children}
            </div>
        </div>
    );
}

export default PublicLayout;