import React from 'react';
import "../Header/Header.css"

const Header = () => {
  return (
    <div onClick={()=>{
      window.scroll(0,0)
    }} className='header'>🎞 Movie Hub 🎞</div>
  )
}

export default Header