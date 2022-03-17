import React from 'react'
import shop from '../image/shoppingCart.png'
import { NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'
import logo from '../image/shop.png'

const NavBar = () => {
  const cartState = useSelector((state) => state.cartReducer)

  return (
    <>
      <nav className='p-3 navbar navbar-expand-lg navbar-light bg-light'>
        <NavLink className='navbar-brand' to='/'>
          <div className='img-hold' style={{ height: '3rem', width: '3rem' }}>
            <img src={logo} alt='logo' className='w-100 h-100' />
          </div>
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav' style={{ marginLeft: 'auto' }}>
            <li className='nav-item active'>
              <NavLink exact='true' className='nav-link' to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact='true' className='nav-link d-flex' to='/cart'>
                <div className='img-hold' style={{ width: '2rem' }}>
                  <img
                    src={shop}
                    alt='shopping'
                    style={{ height: 'auto', width: '100%' }}
                  />
                </div>
                <p style={{ color: 'red' }}>{cartState.cartItems.length}</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
