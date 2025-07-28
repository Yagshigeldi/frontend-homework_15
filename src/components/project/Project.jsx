import React, { useState } from 'react'
import {Cards} from "../../static/index.jsx"
import Popup from '../../ui/Popup.jsx'

const Project = () => {
  const [actionId, setActionId] = useState(null)
  const handleShow = (id) => setActionId(id)
  const handleClose = () => setActionId()
  return (
    <section>
      <div className='container mt-[120px]'>
        <h3 className='text-[22px] text-[#000000] font-normal'>PROJECTS</h3>
        <div className='grid grid-cols-2 gap-10 mt-10'>
          {
            Cards?.map((item) => (
              <div key={item.id}>
                <div>
                  <img   className='w-full h-full  object-cover ' src={item.image} alt="" onClick = {() => handleShow(item.id)} />
                </div>
                <p className='text-2xl text-black font-medium pt-[18px]'>{item.title}</p>
                {
                  actionId === item.id && (
                <Popup isShow={true}>
                  <div>
                    <img src={item.image} className='object-contain rounded-xl' onClick={handleClose} alt="" />
                  </div>
                </Popup>
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Project