import React from 'react'
import './test.css'
import IMG1 from '../../assets/_MG_0096.jpg'
import IMG2 from '../../assets/20220208-_MG_0043.jpg'

const test = () => {
  return (
    <section id="test" className='experience__class'>
      <h2>Test</h2>
      <div className="container test__container">
        <div className="test__card">
          <h3><span className='highlight'>Lorem ipsum,</span> dolor sit amet consectetur adipisicing elit. Exercitationem explicabo, distinctio, quas quaerat sapiente earum nobis in ab omnis porro inventore ullam, laboriosam nam. Dolore quis cumque fuga assumenda dignissimos!</h3>

          
          <img src={IMG1} alt=""/>
          
        </div>
        <div className="test__card">
        <h3><span className='highlight'>Lorem ipsum,</span> dolor sit amet consectetur adipisicing elit. Exercitationem explicabo, distinctio, quas quaerat sapiente earum nobis in ab omnis porro inventore ullam, laboriosam nam. Dolore quis cumque fuga assumenda dignissimos!</h3>
          <img src={IMG2} alt="" />
        </div>
      </div>
    </section>
  )
}

export default test