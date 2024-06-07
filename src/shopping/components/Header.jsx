import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className="left">
         <div className="title">
            <h1>Shooping</h1>
        </div> 
      </div>
      <div className="center">
        <ul>
            <li>Woman</li>
            <li>Men </li>
            <li>Children</li>
            <li>Beauty</li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder='search............'/>
      </div>
      <div className="right">
        <div className="signin">
            Signin/Signup
        </div>
        <div className="cart">
            cart
        </div>
      </div>

    </div>
  )
}

export default Header
