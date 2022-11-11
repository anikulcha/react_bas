import React from "react"
import { NavLink } from "react-router-dom"
import style from './Header.module.css'

const Header = () => {
    return(
        <header className={style.header}>
            <NavLink to='/profile'>
                <img src="https://play-lh.googleusercontent.com/RspifppJTSIlElX52Sn7kWgHOtZCMkx5gAWhkLKNn9EytNnysNyONQEW9Q44XANyqg" alt="alternative" />    
            </NavLink> 
        </header>
    )
}

export default Header