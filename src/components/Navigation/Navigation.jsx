// import 
import style from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink className={navData => navData.isActive ? style.active : style.item} to="/profile">Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={navData => navData.isActive ? style.active : style.item} to="/dialogs">Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={navData => navData.isActive ? style.active : style.item} to="/news">News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={navData => navData.isActive ? style.active : style.item} to="/music">Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={navData => navData.isActive ? style.active : style.item} to="/settings">Settings</NavLink>
            </div>
        </nav>
    )   
}

export default Navigation