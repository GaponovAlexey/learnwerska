import React from 'react'
import logo from '../images/svg/logo.svg'

export const Header = () => {
  return (
    <header className='header'>
      <div className='wrapper'>
        <div className='header__bar'>
          <div className='head_logo'>
            <img src={logo} alt='logo' className='head__logo-img' />
          </div>
          <ul className='header__panel'>
            <li className='header__element'>
              <a href='#!' className='header__element-a'>
                Articles
              </a>
            </li>
            <li className='header__element'>
              <a href='#!' className='header__element-a'>
                Locations
              </a>
            </li>
            <li className='header__element'>
              <a href='#!' className='header__element-a'>
                Videos
              </a>
            </li>
            <li className='header__element'>
              <a href='#!' className='header__element-a'>
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}