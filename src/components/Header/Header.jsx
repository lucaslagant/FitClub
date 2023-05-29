import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'/>
        <ul className='header-menu'>
            <li>Accueil</li>
            <li>Programmes</li>
            <li>Pourquoi nous ?</li>
            <li>Plans</li>
            <li>Avis</li>
        </ul>
    </div>
  )
}

export default Header
