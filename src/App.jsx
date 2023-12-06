import { useState } from 'react'

// CSS
import "./index.css"
import './App.css'
import './colors.css'
import './typography.css'
import './other.css'
// import {ThemeProvider, BaseStyles} from '@primer/react'
import '@primer/css/utilities/index.scss'
import '@primer/css/core/index.scss'
import '@primer/css/primitives/index.scss'
import '@primer/css/support/index.scss'

// PAGES
import Header from './sources/header/Header.jsx'
import Skills from './sources/skills/Skills.jsx'
import Experience from './sources/experience/Experience.jsx'
import Projects from './sources/projects/Projects.jsx'
import Contact from './sources/contact/Contact.jsx'




function App() {

  return (
    <>
      <div className="page-responsive header-overlay home-campaign env-production logged-in color-bg-default">
        <div className='font-mktg'>

          <Header/>
          <Skills/>
          <Experience/>
          <Projects/>
          <Contact/>

        </div>
      </div>
    </>
  )
}

export default App
