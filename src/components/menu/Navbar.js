import React from 'react';
import * as FaIcons from 'react-icons/fa';
import Sidebar from './../sidebar/Sidebar'
import './Navbar.scss'

const Navbar = ({Logout, sidebar, showSidebar, loggedIn, user}) => {

  return (
    <>
        <div className='navbar navbar-navigation'>
          <div className='menu-left'>
            <FaIcons.FaBars />
          </div>
          <div className='menu-center'>
            <FaIcons.FaMixer />
          </div>
          <div className={loggedIn ? 'menu-right' : 'menu-right hide'}>
            <FaIcons.FaSistrix className='icon'/>
            <FaIcons.FaSnapchat className='icon' onClick={showSidebar}/>
            <FaIcons.FaRegBookmark className='icon'/>
          </div>
        </div>
        <Sidebar sidebar={sidebar} showSidebar={showSidebar} Logout={Logout} user={user}/>
    </>
  );
}

export default Navbar;