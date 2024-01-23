import React from 'react'
import headerImg from "../../images/intro-bg.jpg"
import "./style.css"
const Header = () => {
  return (
    <div className='header12'>
        <div>
            <img src={headerImg} className='headerImg' alt='img'></img>
        </div>
    </div>
  )
}

export default Header