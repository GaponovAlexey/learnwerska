import React from 'react'
import places1 from '../images/jpg/places/1.jpg'
import places2 from '../images/jpg/places/2.jpg'
import places3 from '../images/jpg/places/3.jpg'
import places4 from '../images/jpg/places/4.jpg'
import places5 from '../images/jpg/places/5.jpg'

export const Places = () => {
  return (
    <div className='places'>
      <div className='wrapper-full'>
        <div className='places__caption'>
          <div className='places__title-wrap'>
            <h2 className='places__title liner'>
              Get inspired for your next trip
            </h2>
            <a href='#!' className='places__info'>
              VIEW ALL
            </a>
          </div>
          <div className='places__cards'>
            <figure className='places_card places_lg'>
              <img
                src={places1}
                alt='Mount Fuji'
                className='places__card-pic'
              />
              <figcaption className='places__card-title'>Mount Fuji</figcaption>
              <a href='#!' className='pleses__card-link'>
                {' '}
              </a>
            </figure>
            <figure className='places_card places_lg'>
              <img src={places2} alt='Kyoto' className='places__card-pic ' />
              <figcaption className='places__card-title'>Kyoto</figcaption>
              <a href='#!' className='pleses__card-link'>
                {' '}
              </a>
            </figure>
            <figure className='places_card places_sl'>
              <img src={places3} alt='Tokyo' className='places__card-pic ' />
              <figcaption className='places__card-title'>Tokyo</figcaption>
              <a href='#!' className='pleses__card-link'>
                {' '}
              </a>
            </figure>
            <figure className='places_card places_sl'>
              <img src={places4} alt='Niigata' className='places__card-pic ' />
              <figcaption className='places__card-title'>Niigata</figcaption>
              <a href='#!' className='pleses__card-link'>
                {' '}
              </a>
            </figure>
            <figure className='places_card places_sl'>
              <img src={places5} alt='Sapporo' className='places__card-pic ' />
              <figcaption className='places__card-title'>Sapporo</figcaption>
              <a href='#!' className='pleses__card-link'>
                {' '}
              </a>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}
