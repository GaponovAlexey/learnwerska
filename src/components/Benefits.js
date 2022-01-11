import React from 'react'
import church from '../images/svg/church.svg'
import pers from '../images/svg/person.svg'
import bild from '../images/svg/bild.svg'

export const Benefits = () => {
  return (
    <div className='Benefits'>
      <div className='benefits__wrap'>
        <h2 className='benefits__title'>Benefits of Odigo</h2>

        <div className='benefits__cards'>
          <div className='benefits__card'>
            <img src={church} alt='church' className='benefits__card-ico' />
            <h3 className='benefits__card-title'>Welcome to Odigo!</h3>
            <p className='benefits__card-desc'>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over.
            </p>
            <a href='#!' className='benefits__card-info'>
              LEARN MORE
            </a>
          </div>
          <div className='benefits__card'>
            <img
              src={pers}
              alt='Your Personal Japan Guide'
              className='benefits__card-ico'
            />
            <h3 className='benefits__card-title'>Your Personal Japan Guide</h3>
            <p className='benefits__card-desc'>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over.
            </p>
            <a href='#!' className='benefits__card-info'>
              LEARN MORE
            </a>
          </div>
          <div className='benefits__card'>
            <img
              src={bild}
              alt='Promoting Local Businesses'
              className='benefits__card-ico'
            />
            <h3 className='benefits__card-title'>Promoting Local Businesses</h3>
            <p className='benefits__card-desc'>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over.
            </p>
            <div className='benefits__card__infos'>
              <a href='#!' className='benefits__card-info'>
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
