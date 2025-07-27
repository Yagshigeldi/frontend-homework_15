import React from 'react'
import {Cards} from "../../static/index.jsx"

const Project = () => {
  return (
    <section>
      <div className='container mt-[120px]'>
        <h3 className='text-[22px] text-[#000000] font-normal'>PROJECTS</h3>
        <div className='grid grid-cols-2 gap-10 mt-10'>
          {
            Cards?.map((item) => (
              <div key={item.id}>
                <div>
                  <img src={item.image} alt="" />
                </div>
                <p className='text-2xl text-black font-medium pt-[18px]'>{item.title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Project