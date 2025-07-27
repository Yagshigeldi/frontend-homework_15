import React from 'react'
import headerLogo from "../../assets/DWEL®.svg"
import Button from '../../ui/Button'

const Header = () => {
  return (
    <header className='mt-[40px]'>
      <nav className='container flex items-center justify-between'>
        <div>
          <img src={headerLogo} alt=""/>
        </div>
        <div className='flex gap-5'>
          <Button title={"Sign in"}></Button>
          <Button title={"Sign up"}></Button>
        </div>
      </nav>
    </header>
  )
}

export default Header