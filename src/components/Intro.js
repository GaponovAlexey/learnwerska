import React from 'react'

export const Intro = () => {
  return (
    <main className='main'>
      <section className='intro'>
        <div className='wrapper'>
          <div className='intro__section'>
            <div className='intro__title'>
              <h1 className='intor__title-thump'>
                Discover Amazing places in Japan
              </h1>
            </div>
            <div className='intro__desc'>
              <p className='intro__desc-item'>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over. Being gorgeous with belly side up i
                could pee on this if i had the energy but under the bed, for
                attack the child, open the door,
              </p>
            </div>
            <form className='intro__form'>
              <fieldset className='intro__form-wrap'>
                <p className='intro__form-info'>
                  <input
                    type='text'
                    className='intro__form-inp'
                    placeholder='What would you like to do?'
                  />
                  <input
                    type='text'
                    className='intro__form-inp'
                    placeholder='Where would you like to go?'
                  />
                  <button className='intro__form-but'>search</button>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
