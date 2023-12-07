import React from 'react'
import Typewriter from '../../functions/typewrite.jsx'


// IMAGES
import IMG1 from '../../assets/principal.png'



// OTHERS
import CV from '../../assets/CV.pdf'



const Header = () => {
  const textArray = ["Scientist", "Engineer", "Analyst"];
  return (
      <div className="color-header home-campaign-productivity js-section px-3 pb-0 pt-5">
        <div className="container-xl position-relative">
          {/* [x] Fix image */}
        <img alt="" aria-hidden="true" width="2236" height="1630" className="image-fade top-0 position-absolute height-auto events-none d-none d-sm-block" style={{width: "min(1118px, max(100vh, 100vw))", left: "40%"}} src={IMG1}/>
        </div>
        <div className="overflow-hidden color-header home-campaign-hero">
          <div className="position-relative pt-3 pt-sm-8 pt-lg-12 container-xl js-build-in-trigger build-in-animate">
            <div className="d-flex pt-sm-9">
              <div className='col-1 d-flex flex-column events-none position-relative'>
                <div className="mx-auto">
                  <div className="d-inline-block circle p-1" style={{border: '2px solid rgba(255,255,255,0.3)'}}></div>
                  </div>
                  <div style={{background: "linear-gradient(transparent, #7C72FF 30%)"}} className="home-campaign-git-line height-full rounded mx-auto"></div>
                <div className="mx-auto my-3 home-campaign-glowing-icon">
                  <div className='position-relative d-inline-block z-1'>
                  <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-code">
                    <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path></svg>
                    <span className="position-absolute left-0 top-0 height-full width-full home-campaign-glowing-icon-glow circle z-n1" style={{backgroundColor: "var(--mktg-accent-primary)", filter: "blur(18px)"}}></span>
                  </div>
                </div>
                <div className="home-campaign-git-line height-full rounded mx-auto" style={{background: "linear-gradient(#7C72FF, #2DA44E 80%, #3FB950)"}}></div>
                </div>
                <div className="col-11 text-left pl-2 pl-sm-0 mt-n4">
                  <div className="position-relative z-1 mb-2 mb-sm-6">
                    <h1 className="h0-mktg mb-2 position-relative z-2">
                      <span style={{fontSize: "1.2em"}}>Eduard Perez<br />Mendez</span>
                    </h1>
                    <h3 className="h3-mktg color-fg-muted mb-5">
                      Bioinformatics Data <span className='typewriter_text'><Typewriter text={textArray} typingDelay={100} deletingDelay={100} /></span>
                    </h3>
                    <p className="f2-mktg text-normal color-fg-muted mb-3 mb-md-10 position-relative z-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio optio nisi fugiat recusandae incidunt aut ullam corrupti atque numquam ut tempore nihil unde quibusdam sit iusto, consequatur aspernatur voluptas eos!</p>
                  <div className="d-flex flex-column flex-md-row">
                    <a href={CV} className="btn-mktg download">Download CV</a>
                    <div className="border-top border-md-left mx-md-3 mb-3 mb-md-0"></div>
                    {/* [ ] href to contact me section*/}
                    <a href="#contact" className="btn-mktg home-campaing-enterprise btn-muted-mktg" data-test-selector="start-trial-button">Contact Me</a>
                  </div>
                  <div className="my-8 my-md-10 build-in-animate col-12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Header