import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from "react-scroll"

const Header = () => {
const mobile = window.innerWidth<=768 ? true: false; const [menuOpened, setMenuOpened]=useState(false); 
return ( <div
  className="header">
  <img src={Logo} alt="" className='logo' />
  {(menuOpened=== false && mobile===true)? (
  <div
  style={{
    backgroundColor: 'var(--appColor)',
    padding: '0.5rem',
    borderRadius: "5px",
  }}

  onClick={() => setMenuOpened(true)}
  >
    <img src={Bars} style={{width: '1.5rem', height: '1.5rem'}} /></div>
  ): (
    <ul className='header-menu'>
      <li><Link
          onClick={()=>setMenuOpened(false)}
          activeClass='active'
          to='header'
          span={true}
          smooth={true}
        >Accueil</Link></li>
      <li>
      <Link
          onClick={()=>setMenuOpened(false)}
          to='programs'
          span={true}
          smooth={true}
        >Programmes</Link>
      </li>
      <li>
        <Link
          onClick={()=>setMenuOpened(false)}
          to='reasons'
          span={true}
          smooth={true}
        >Pourquoi nous ?</Link></li>
      <li>
        <Link
          onClick={()=>setMenuOpened(false)}
          to='plans'
          span={true}
          smooth={true}
        >Plan</Link>
      </li>
      <li>
      <Link
          onClick={()=>setMenuOpened(false)}
          to='testimonials'
          span={true}
          smooth={true}
        >Avis</Link>
      </li>
    </ul>
  )}
  </div>
);
};

  export default Header