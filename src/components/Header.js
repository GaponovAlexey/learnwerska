import React, { useState } from 'react'
import logo from '../images/svg/logo.svg'

export const Header = () => {
  const [scroll, setSCROLL] = useState(false)
  const [statBur, setStatBur] = useState(false)

  

  window.onscroll = () => {
    if (window.pageYOffset > 70) {
      setSCROLL(true)
    } else {
      setSCROLL(false)
    }
  }

  return (
    <header className={scroll ? 'header header__fix' : 'header'}>
      <div className='wrapper'>
        <div className='header__bar'>
          <div className='head_logo'>
            <img src={logo} alt='logo' className='head__logo-img' />
          </div>
          <nav className={statBur ? 'header_nav header__nav-active' : 'header_nav'}>
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
            <div onClick={() => setStatBur(!statBur)} className='header__nav-close'>
              <span className='heade__nav_close-line'></span>
              <span className='heade__nav_close-line'></span>
            </div>
          </nav>
          <div onClick={() => setStatBur(!statBur)}  className='header__burger burger'>
            <span className='burger__line'></span>
            <span className='burger__line'></span>
            <span className='burger__line'></span>
          </div>
        </div>
      </div>
    </header>
  )
}
