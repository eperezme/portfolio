import React from 'react'

// CSS
import './Experience.css'

function Experience() {
  return (
    <div className='color-experience home-campaign-security js-section overflow-hidden px-3 pb-8 pt-5'>
      <div className="container-xl">
        <div className="d-flex js-build-in-trigger position-relative build-in-animate">
          <div className="col-1 d-flex flex-column flex-items-center">
            <div className="mb-4 position-relative home-campaign-glowing-icon js-build-in-item build-in-scale-fade build-in-animate" style={{transitionDelay: "0ms",}}>
            <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-lock">
              <path d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9Zm-1.5 2.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm3-4.25V9h9V7.25c0-2.67-1.922-4.75-4.5-4.75-2.578 0-4.5 2.08-4.5 4.75Z"></path>
            </svg>
            <span className="position-absolute left-0 top-0 height-full width-full home-campaign-glowing-icon-glow circle z-n1" style={{backgroundColor: "var(--mktg-accent-primary)", filter: "blur(18px)",}}></span>
            </div>
            <div className="home-campaign-git-line height-full rounded js-build-in-item build-in-scale-top build-in-animate git-line-blue-upper"></div>
          </div>
          <div className="col-11 col-lg-7 ml-2 ml-md-0 mb-6 mb-md-10 pr-lg-3">
            <h3 className="h5-mktg mb-4 text-medium js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: "200ms"}}>WORK</h3>
            <h2 className="h3-mktg mb-4 text-medium js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: "300ms"}}>
              <span className="text-accent-primary d-block">Lorem Ipsum </span>
                Lorem ipsum dolor sit.
            </h2>
          </div>
          <img alt="" aria-hidden="true" width="595" height="595" className="position-absolute height-auto d-none d-md-block col-8 events-none" style={{top: "-10%", right: "-25%",}} loading="lazy" decoding="async" src="https://github.githubassets.com/assets/shape-2-f30dcc9bd35c.svg"></img>
        </div>
        {/* MAIN CARD */}
        <card-skew className="overflow-hidden rounded-3 mb-3 mb-md-5 position-relative z-1">
          <div className="color-bg-subtle border rounded-3 p-2 p-lg-6 js-build-in-trigger feature-card-mktg z-1 position-relative build-in-animate">
            <div className="position-relative d-flex flex-column flex-md-row gutter-spacious col-lg-10 mx-auto my-lg-6">
              {/* column 1 */}
              <div className="col-md-6 js-build-in-item build-in-scale-right build-in-animate" style={{transitionDelay: "600ms"}}></div>
              {/* column 2 */}
              <div className="col-md-6 js-build-in-item build-in-scale-right build-in-animate" style={{transitionDelay: "600ms"}}></div>
            </div>
          </div>
        </card-skew>
      </div>
    </div>
  )
}

export default Experience