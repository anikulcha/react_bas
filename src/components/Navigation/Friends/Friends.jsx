import React from "react";
import { NavLink } from "react-router-dom";
import style from './Friends.module.css'

const Friends = (props) => {
    let path = `dialogs/${props.id}`
    return (
        <div className={style.friendBlock}>
            <NavLink to={path}>
                <img src={props.userPhoto} alt="profile image" />
                <div>{props.userName}</div>
            </NavLink>
        </div>
    )
}

export default Friends