"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from  "./navlink.module.css"

interface NavLinkItem {
    title : string;
    path : string;
}

interface NavLinkIprops{
    item : NavLinkItem;
}

export default function NavLink(props : NavLinkIprops){
    const {item: {path , title} }= props;
    const pathName = usePathname();
    return(
        <div className={`${style.container} ${pathName === path && style.active}`}>
            <Link href={path} >{title}</Link>   
        </div>
    )
}