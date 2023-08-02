import Image from "next/image";



const Logo = () => {
    return (
        <Image
            src="/images/logo.png"
            width="94"
            height="100"
            className="mr-2 lg:mr-0"
            alt="logo-company"
        />
    );
}

export default Logo;