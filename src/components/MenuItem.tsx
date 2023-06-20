"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navStyles from "./components.module.css";

interface Props {
    path: string;
    icon?: JSX.Element;
    title?: string;
}

export const MenuItem = ({ path, icon, title }: Props) => {
    const currentPath = usePathname();

    return (
        <Link
            href={path}
            className={navStyles[`menu-item`]}>

                <div className={navStyles[`nav-menu-icon`]}>{icon}</div>

            <div /* className={navStyles[`nav-logo`]} */>
                <span className={navStyles[`nav-menu-item`]}>{title}</span>
            </div>
        </Link>
    );
};


/*  ${ currentPath === path ? 'bg-blue-800': '' } */
