import React from 'react'
import './Header.css'
import PRIN from '../../assets/principal-transformed.png'

const Header = () => {
  return (
    <div>
      {/* IMAGEN */}
      <div className='container-xl position-relative'>
        <img aria-hidden="true" width="2236" height="1630" className='events-none position-absolute top-0 height-auto' src={PRIN} alt="" style={{width: "min(1118px, max(100vh, 100vw))", left: "67%;"}}/>
        <img alt="" aria-hidden="true" width="860" height="544" class="events-none d-sm-none width-full height-auto mb-n3" src="https://github.githubassets.com/assets/hero-mobile-7163f4f5de41.webp"></img>
      </div>
      {/* NOMBRE */}
      <div className="px-3">
        
      </div>
      <h1 className='position-relative'>
        <span className='title'>Eduard Perez Mendez</span>
      </h1>
      <h1>TEST</h1>
    </div>
  )
}

export default Header