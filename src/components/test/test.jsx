import React from 'react'
import './test.css'
import IMG1 from '../../assets/_MG_0096.jpg'
import IMG2 from '../../assets/20220208-_MG_0043.jpg'

const test = () => {
  return (
    <section id="test" className='experience__class'>
      <h2>Test</h2>
      <div className="container vcard-container">
        <div className="vcard">
          <p><em>Lorem ipsum,</em> dolor sit amet consectetur adipisicing elit. Exercitationem explicabo, distinctio, quas quaerat sapiente earum nobis in ab omnis porro inventore ullam, laboriosam nam. Dolore quis cumque fuga assumenda dignissimos!</p>

          
          <img src={IMG1} alt=""/>
          
        </div>
        <div className="vcard">
        <p><em>Lorem ipsum,</em> dolor sit amet consectetur consectetur consectetur consectetur </p>
          <img src={IMG2} alt="" />
        </div>
      </div>
    </section>
  )
}

export default test