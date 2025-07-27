import React from 'react'
import footerLogo from "../../assets/© DWEL.svg"

const Footer = () => {
  return (
    <footer className='mt-[120px]'>
      <div className='container flex items-center justify-between'>
        <div>
          <img src={footerLogo} alt="" />
          <h4 className='mt-2'>Powered by Webflow .</h4>
        </div>
        <div className='flex gap-44'>
          <div>
            <h4>Password</h4>
            <h4>404</h4>
          </div>
          <div>
            <h4>Licenses</h4>
            <h4>Style Guide</h4>
            <h4>Changelog</h4>
          </div>
          <div>
            <h4>Twitter</h4>
            <h4>Instagram</h4>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer