
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
        <nav className={navStyles[`nav-container`]}>
            <h2 className={navStyles[`nav-logo`]}>Online-Shop</h2>
            <div className={navStyles[`nav-links-wrapper`]}>
                {navigationItems.map(({ path, title }) => (
                    <Link
                        key={path}
                        href={path}
                        className={navStyles[`menu-item`]}>
                        <span className={navStyles[`nav-menu-item`]}>
                            {title}
                        </span>
                    </Link>
                ))}
            </div>
            <div className={navStyles[`nav-icons-wrapper`]}>
                {iconsItems.map(({ path, icon }) => (
                    <Link
                        key={path}
                        href={path}
                        className={navStyles[`menu-item`]}>
                        <div className={navStyles[`nav-menu-icon`]}>{icon}</div>
                    </Link>
                ))}
            </div>
            <div className={navStyles[`nav-cart-item`]}>
            <FiShoppingBag size={20} />
            </div>
        </nav>
    );
};
