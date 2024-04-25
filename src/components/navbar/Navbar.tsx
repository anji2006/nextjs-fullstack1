import NavLinks from "./Links";
import style from "./navbar.module.css"

export default function Navbar(){
    return(
        <div className={style.container}>
            <div>
                Logo
            </div>
            <NavLinks />
        </div>
    )
}