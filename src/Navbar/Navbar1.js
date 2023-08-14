import React, { useState } from 'react'
import { NavLink, Outlet } from "react-router-dom";
import DateTime from './DateTime'
import './Navbar1.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'


function Navbar1() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <nav className='navbar'>
        
          <div>
            <DateTime/>
          </div>
          
          <div className='navbar-container container'>

            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <NavLink to='/' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} onClick={closeMobileMenu}>
                🏠 Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/about' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} onClick={closeMobileMenu}>
                  ❓About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/projects' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} onClick={closeMobileMenu}>
                  💼 Projects
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/weather' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} onClick={closeMobileMenu}>
                  ☁️ Weather
                </NavLink>
              </li>
            </ul>

          </div>
        </nav>
      </IconContext.Provider>
      <Outlet />
    </>
  )
}

export default Navbar1;