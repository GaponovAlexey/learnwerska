import React from 'react'

export const Video = () => {
  return (
    <div className='videos__wrapper' id='Videos' >
      <div className='video__item'></div>
      <iframe
        className='video__element'
        src='https://www.youtube.com/embed/IuTDuvYr7f0'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
  )
}
