// import 
import style from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends'

const Navigation = (props) => {

    let friendsItem = 
        props.userInfo.map(
            uid => 
                <Friends userName={uid.name} 
                         userPhoto={uid.profilePhoto}
                         id={uid.ID}/>)

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
            <h3>My best friends</h3>
            <div className={style.grid}>
                { friendsItem }
            </div>
        </nav>
    )   
}

export default Navigation