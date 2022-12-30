import React, { useState } from 'react'
import "./Nav.css"
import logo from "../../assets/logo.png"


const Nav = () => {

  const [shownav, setShowNav] = useState(false);
  const handleClick = () =>setShowNav(!shownav);

  return (
    <div className='navbar'>
        <div className='nav-right'>
            <img src={logo} alt="img"/>
            <div className="menu">
              <i className='fas fa-bars' onClick={handleClick}/>
            </div>

            <div className={shownav ?'right-item' : 'right-item active'}>
                <div>home</div>
                <div>about</div>
                <div>contact</div>
                <div>shop</div>
                <div className='btn'>
                  <i class="fa-regular fa-circle-xmark" onClick={handleClick}></i>
                </div>
            </div>
        </div>
        <div className='nav-left'>
                <div><i class="fa-solid fa-right-to-bracket"></i> <span>login</span></div>
                <div><i class="fa-solid fa-magnifying-glass"></i> <span>search</span></div>
                <div><i class="fa-solid fa-basket-shopping"></i> <span>basket</span></div>
        </div>
    </div>
  )
}

export default Nav