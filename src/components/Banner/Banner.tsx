import React from 'react'
import './Banner.scss'

const Banner = () => {
  return (
    <div className='h-96 w-full flex items-center'>
      <div className='bannerImage h-full w-full bg-center blur'></div>
      <div className='flex justify-center items-center w-screen absolute z-10'>
        Susana Bastos
      </div>
    </div>
  )
}

export default Banner