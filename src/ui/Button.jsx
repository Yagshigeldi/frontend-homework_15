import React from 'react'

const Button = ({title}) => {
  return (
    <button className='w-[100px] h-[40px] bg-blue-600 hover:bg-blue-800 rounded-[5px] cursor-pointer text-white'> 
        {title}
    </button>
  )
}

export default Button