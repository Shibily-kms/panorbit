import React from 'react'
import './about.scss'
import Header from '../header/Header'

function About() {
  return (
    <div className='about'>
      <div className="header-div">
        <Header title={"Profile"} />
      </div>
      <div className="content">
        <div className="left">
          <div className="top">
            <img src="" alt="" />
            <h3>Name</h3>
          </div>
          <div className="details">

          </div>
        </div>
        <div className="right">

        </div>
      </div>
    </div>
  )
}

export default About