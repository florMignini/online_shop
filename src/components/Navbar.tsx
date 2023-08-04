
import navStyles from "./components.module.css";
import { HiSearch, HiOutlineUser } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";
import Link from "next/link";
const navigationItems: navItems[] = [
    {
        path: "/",
        title: "Home",
    },
    {
        path: "/",
        title: "Categories",
    },
    {
        path: "/",
        title: "About us",
    },
];

const iconsItems: navItems[] = [
    {
        path: "/",
        icon: <HiSearch size={20} />,
    },
    {
        path: "/",
        icon: <HiOutlineUser size={20} />,
    },
   
];

interface navItems {
    path: string;
    icon?: JSX.Element;
    title?: string;
}
export const Navbar = () => {
    return (
        <nav className="h-100 grid grid-cols-[20%_60%_20%] sticky top-0 backdrop-blur-md text-gray-500 items-center content-center">
            {/* Title */}
            <div className="flex items-center justify-center ">
                <h2 className="text-3xl">Online-Shop</h2>
            </div>
            <div>
            {/* Medium */}
                <div className="flex items-center justify-around">
                    <div className="w-[80%] flex text-xl items-center justify-around">
                        {navigationItems.map(({ path, title }) => (
                            <Link
                                key={path}
                                href={path}
                                className="flex mr-3 ">
                                {title}
                            </Link>
                        ))}
                    </div>
                    <div className="w-[20%] flex text-xl items-center justify-around">
                        {iconsItems.map(({ path, icon }) => (
                            <Link
                                key={path}
                                href={path}
                                className="">
                                {icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            {/* Bag Icon */}
            <div className="">
            <FiShoppingBag size={20} />
            </div>
        </nav>
    );
};
