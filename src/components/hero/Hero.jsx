import React from 'react'
import heroVideo from "../../assets/video.png"
import heroPlay from "../../assets/play.svg"

const Hero = () => {
  return (
    <div className='container mt-[40px]'>
      <div className='relative'> 
        <img src={heroVideo} alt="" />
        <div className='absolute inset-0 flex items-center justify-center'>
          <button className='p-6 border bg-white border-none'><img src={heroPlay} alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default Hero