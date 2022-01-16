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

  // Scroll to anchors
  ;(function () {
    const smoothScroll = function (targetEl, duration) {
      const headerElHeight = document.querySelector('.header').clientHeight
      let target = document.querySelector(targetEl)
      let targetPosition = target.getBoundingClientRect().top - headerElHeight
      let startPosition = window.pageYOffset
      let startTime = null

      const ease = function (t, b, c, d) {
        t /= d / 2
        if (t < 1) return (c / 2) * t * t + b
        t--
        return (-c / 2) * (t * (t - 2) - 1) + b
      }

      const animation = function (currentTime) {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const run = ease(timeElapsed, startPosition, targetPosition, duration)
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
      }
      requestAnimationFrame(animation)
    }

    const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll')
      links.forEach((each) => {
        each.addEventListener('click', function () {
          const currentTarget = this.getAttribute('href')
          smoothScroll(currentTarget, 1000)
        })
      })
    }
    scrollTo()
  })()

  return (
    <header className={scroll ? 'header header__fix' : 'header'}>
      <div className='wrapper'>
        <div className='header__bar'>
          <div className='head_logo'>
            <img src={logo} alt='logo' className='head__logo-img' />
          </div>
          <nav
            className={statBur ? 'header_nav header__nav-active' : 'header_nav'}
          >
            <ul className='header__panel'>
              <li className='header__element'>
                <a href='#Articles' className='header__element-a js-scroll'>
                  Articles
                </a>
              </li>
              <li className='header__element'>
                <a href='#Locations' className='header__element-a js-scroll'>
                  Locations
                </a>
              </li>
              <li className='header__element'>
                <a href='#Videos' className='header__element-a js-scroll'>
                  Videos
                </a>
              </li>
              <li className='header__element'>
                <a href='#Sing-in' className='header__element-a js-scroll'>
                  Sign in
                </a>
              </li>
            </ul>
            <div
              onClick={() => setStatBur(!statBur)}
              className='header__nav-close'
            >
              <span className='heade__nav_close-line'></span>
              <span className='heade__nav_close-line'></span>
            </div>
          </nav>
          <div
            onClick={() => setStatBur(!statBur)}
            className='header__burger burger'
          >
            <span className='burger__line'></span>
            <span className='burger__line'></span>
            <span className='burger__line'></span>
          </div>
        </div>
      </div>
    </header>
  )
}
