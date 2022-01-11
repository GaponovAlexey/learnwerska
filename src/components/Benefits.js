import React from 'react'
import church from '../images/svg/church.svg'
import pers from '../images/svg/person.svg'
import bild from '../images/svg/bild.svg'

export const Benefits = () => {
  return (
    <section className='benefits'>
      <div className='benefits__wrap'>
        <h2 className='benefits__title'>Benefits of Odigo</h2>

        <div className='benefits__cards'>
          <div className='benefits__card'>
            <img src={church} alt='church' className='benefits__card-ico' />
            <h3 className='benefits__card-title'>Welcome to Odigo!</h3>
            <div className='b__card-infos'>
            <p className='benefits__card-desc'>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over.
            </p>
              <a href='#!' className='benefits__card-info'>
                LEARN MORE
              </a>
            </div>
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
            <div className='b__card-infos'>
              <a href='#!' className='benefits__card-info'>
                LEARN MORE
              </a>
            </div>
          </div>
          <div className='benefits__card'>
            <img
              src={bild}
              alt='Your Personal Japan Guide'
              className='benefits__card-ico'
            />
            <h3 className='benefits__card-title'>Your Personal Japan Guide</h3>
            <p className='benefits__card-desc'>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over.
            </p>
            <div className='b__card-infos'>
              <a href='#!' className='benefits__card-info'>
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
