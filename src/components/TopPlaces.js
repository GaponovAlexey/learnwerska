import React from 'react'
import cat1 from '../images/category/1.jpg'
import cat2 from '../images/category/2.jpg'
import cat3 from '../images/category/3.jpg'
import cat4 from '../images/category/4.jpg'
import cat5 from '../images/category/5.jpg'
import cat6 from '../images/category/6.jpg'

export const TopPlaces = () => {
  return (
    <section className='top_places'>
      <div className='wrapper-full'>
        <div className='top__section'>
          <div className='top__title liner'>
            <h2 className='top__title-ico linear'>Today top places to visit</h2>
          </div>
          
          <div className='top__cards'>
            <div className='top__card-pic'>
              <div className='top__card'>
                <div className='top__img'>
                  <img src={cat1} alt='NAGOYA' className='top_img-ico' />
                  <div className='top__card_stats'>
                    <h2 className='top__card-title'>NAGOYA</h2>
                    <span className='top__card-likes'>221</span>
                    <span className='top__card-coment'>40</span>
                  </div>
                </div>
              </div>
              <p className='top__card-desc'>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over. Being gorgeous with belly side up i
                could pee on this.
              </p>
              <button className='top__card-but'>SEE MORE</button>
            </div>
            <div className='top__card-pic'>
              <div className='top__card'>
                <div className='top__img'>
                  <img src={cat2} alt='NIIGATA' className='top_img-ico' />
                  <div  className='top__card_stats'>
                    <h2 className='top__card-title'>NIIGATA</h2>
                    <span className='top__card-likes'>221</span>
                    <span className='top__card-coment'>40</span>
                  </div>
                </div>
              </div>
              <p className='top__card-desc'>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over. Being gorgeous with belly side up i
                could pee on this.
              </p>
              <button className='top__card-but'>SEE MORE</button>
            </div>
            <div className='top__card-pic'>
              <div className='top__card'>
                <div className='top__img'>
                  <img src={cat3} alt='OSAKA' className='top_img-ico' />
                  <div className='top__card_stats'>
                    <h2 className='top__card-title'>OSAKA</h2>
                    <span className='top__card-likes'>221</span>
                    <span className='top__card-coment'>40</span>
                  </div>
                </div>
              </div>
              <p className='top__card-desc'>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over. Being gorgeous with belly side up i
                could pee on this.
              </p>
              <button className='top__card-but'>SEE MORE</button>
            </div>
            <div className='top__card-pic'>
              <div className='top__card'>
                <div className='top__img'>
                  <img src={cat4} alt='SAITAMA' className='top_img-ico' />
                  <div className='top__card_stats'>
                    <h2 className='top__card-title'>SAITAMA</h2>
                    <span className='top__card-likes'>221</span>
                    <span className='top__card-coment'>40</span>
                  </div>
                </div>
              </div>
              <p className='top__card-desc'>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over. Being gorgeous with belly side up i
                could pee on this.
              </p>
              <button className='top__card-but'>SEE MORE</button>
            </div>
            <div className='top__card-pic'>
              <div className='top__card'>
                <div className='top__img'>
                  <img src={cat5} alt='UENO' className='top_img-ico' />
                  <div className='top__card_stats'>
                    <h2 className='top__card-title'>UENO</h2>
                    <span className='top__card-likes'>221</span>
                    <span className='top__card-coment'>40</span>
                  </div>
                </div>
              </div>
              <p className='top__card-desc'>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over. Being gorgeous with belly side up i
                could pee on this.
              </p>
              <button className='top__card-but'>SEE MORE</button>
            </div>
            <div className='top__card-pic'>
              <div className='top__card'>
                <div className='top__img'>
                  <img src={cat6} alt='SHIBUYA' className='top_img-ico' />
                  <div className='top__card_stats'>
                    <h2 className='top__card-title'>SHIBUYA</h2>
                    <span className='top__card-likes'>221</span>
                    <span className='top__card-coment'>40</span>
                  </div>
                </div>
              </div>
              <p className='top__card-desc'>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over. Being gorgeous with belly side up i
                could pee on this.
              </p>
              <button className='top__card-but'>SEE MORE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
