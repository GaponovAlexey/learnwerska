import React from 'react'
import footerLogo from '../images/svg/odigo-Logo.svg'
export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='wrapper'>
        <div className='footer__item'>
          <div className='footer__logo'>
            <img
              src={footerLogo}
              alt='Discover Amazing places in Japan'
              className='footer__logo-pic'
            />
          </div>
          <nav className='footer__nav'>
            <ul className='footer__menu'>
              <li className='footer__item'>
                <h3 className='footer__menu-title'>Comnany</h3>
              </li>
              <li className='footer__item'>
                <a href='#!' className='footer__menu-item'>
                  About{' '}
                </a>
              </li>
              <li className='footer__item'>
                <a href='#!' className='footer__menu-item'>
                  Team
                </a>
              </li>
              <li className='footer__item'>
                <a href='#!' className='footer__menu-item'>
                  Careers
                </a>
              </li>
              <li className='footer__item'>
                <a href='#!' className='footer__menu-item'>
                  Privacy Policy
                </a>
              </li>
            </ul>
            <ul className='footer__menu'>
              <li className='footer__item'>
                <h3 className='footer__menu-title'>Comnany</h3>
              </li>
              <li className='footer__item'>
                <a href='#!' className='footer__menu-item'>
                  About{' '}
                </a>
              </li>
              <li className='footer__item'>
                <a href='#!' className='footer__menu-item'>
                  Team
                </a>
              </li>
              <li className='footer__item'>
                <a href='#!' className='footer__menu-item'>
                  Careers
                </a>
              </li>
              <li className='footer__item'>
                <a href='#!' className='footer__menu-item'>
                  Privacy Policy
                </a>
              </li>
            </ul>
            <ul className='footer__menu'>
              <li className='footer__item'>
                <h3 className='footer__menu-title'>Comnany</h3>
              </li>
              <li className='footer__item'>
                <a href='#!' className='footer__menu-item'>
                  About{' '}
                </a>
              </li>
              <li className='footer__item'>
                <a href='#!' className='footer__menu-item'>
                  Team
                </a>
              </li>
              <li className='footer__item'>
                <a href='#!' className='footer__menu-item'>
                  Careers
                </a>
              </li>
              <li className='footer__item'>
                <a href='#!' className='footer__menu-item'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
