import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {useState} from 'react'
import { Link } from 'react-router-dom'
import './styles.scss/Header.scss'
import {Menu} from './Menu'


const Header = () => {

    const [openMenu,setOpenMenu] = useState(false)

    const showMenu = () => {
        setOpenMenu(!openMenu)
    }


    return (
        <div className='header'>
            <nav className='nav-container'>
                <div className="menu">
                <AiOutlineMenu size={`35px`} className='menu-icon' onClick={showMenu}/>
            </div>

            <div className="logo">
                <h1>Etravel</h1>
            </div>


                <div className="right">
                    <ul>
                        <li>
                            <Link to='/places'>Places</Link>
                        </li>
                        <li>
                            <Link to='/pricing'>Pricing</Link>
                        </li>
                        <li>
                            <Link to='/about'>Collections</Link>
                        </li>
                        <li>
                            <Link to='/sponsors'>Sponsors</Link>
                        </li>
                    </ul>
                </div>
            </nav>


            <nav className={openMenu ? 'slider active' : 'slider'}>
                <ul className={showMenu} className='ul-menu' onClick={showMenu}>
                    {Menu.map((item,index) => {
                        return (
                            <div className='container'>
                            <li className={item.className}>
                                <Link to={item.path}>
                                      {item.text}
                                </Link>
                            </li>
                            <p className='icon'>{item.icon}</p>
                            </div>
                        )
                    })}
                </ul>
            </nav>



        </div>
    )
}

export default Header
