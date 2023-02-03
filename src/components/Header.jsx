import React from 'react'
import logo from "../images/logo.svg"
import iconMenu from "../images/icon-menu.svg"
import "../styles/header.css"
import { useRef } from 'react'

export default function Header() {
    const menuRef = useRef()
    const hamburgerClick = () => {
        console.log("print")
        if(menuRef.current.id === "header__menu"){
            menuRef.current.className += " responsive"
            menuRef.current.id = "header__"
        }else{
            menuRef.current.className = "header__menu"
            menuRef.current.id = "header__menu"
        }
    }

    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="" className="header__title" />
            </div>
            <nav className="header__menu" id='header__menu' ref={menuRef}>
                <ul className="menu__links">
                    <li className='menu__li'><a className='menu__a' href="#Features">Features</a></li>
                    <li className='menu__li'><a className='menu__a' href="#Pricing">Pricing</a></li>
                    <li className='menu__li'><a className='menu__a' href="#Resources">Resources</a></li>
                </ul>
                <hr className='menu__hr'></hr>
                <div className="menu__login">
                    <ul className="menu__links">
                        <li className='menu__li'><a className='menu__a' href="#Login">Login</a></li>
                    </ul>
                    <button className="menu__button">Sign Up</button>
                </div>
            </nav>
            <img src={iconMenu} alt="" className="header__hamburger" onClick={hamburgerClick}/>
        </header>
    )
}
