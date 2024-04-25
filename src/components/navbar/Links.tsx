import style from "./navbar.module.css"
import NavLink from "./navlink/NavLink"

export default function Links(){

    // Temperory
    const session = false;
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contacts",
            path: "/contacts"
        },
        {
            title: "Blog",
            path: "/blog"
        },
    ]

    return(
        <div className={style.navLinksContainer}>
            {links.map(link => (
                <NavLink item={link} key={link.title}/>
            ))}
            {session ? (
                <button className={style.login}>Logout</button>
            ) : (
                <button className={style.login}>Login</button>
            )}
        </div>
    )
}