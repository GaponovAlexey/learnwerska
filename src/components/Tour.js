import React from 'react'
import tour1 from '../images/jpg/tour/1.jpg'
import tour2 from '../images/jpg/tour/2.jpg'
export const Tour = () => {
  return (
    <section className='tour'>
      <div className='wrapper-full'>
        <div className='tour__card'>
          <div className='tour__pic'>
            <img
              src={tour1}
              alt='Prefecture in Focus: Tottori'
              className='tour__pics'
            />
          </div>
          <div className='tour__section'>
            <h3 className='tour__title'>Prefecture in Focus: Tottori</h3>
            <div className='tour__desc'>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over. Being gorgeous with belly side up i could
              pee on this if i had the energy but under the bed, for attack the
              child, open the door,
            </div>
            <a href='#!' className='tour__link'>VIEW PREFECTURE</a>
          </div>
        </div>
        <div className='tour__card'>
        
          <div className='tour__section'>
            <h3 className='tour__title'>Featured Neighborhood: Kyoto’s Arashiyama</h3>
            <div className='tour__desc'>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over. Being gorgeous with belly side up i could
              pee on this if i had the energy but under the bed, for attack the
              child, open the door,
            </div>
            <a href='#!' className='tour__link'>VIEW PREFECTURE</a>
          </div>
          <div className='tour__pic'>
            <img
              src={tour2}
              alt='Prefecture in Focus: Tottori'
              className='tour__pics'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
