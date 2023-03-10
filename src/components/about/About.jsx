import React from 'react'
import './about.scss'
import Header from '../header/Header'
import { useSelector } from 'react-redux'

function About({ show, setShow }) {
  const { user } = useSelector((state) => state.user)
  return (
    <div className='about'>
      <div className="header-div">
        <Header title={"Profile"} show={show} setShow={setShow} />
      </div>
      <div className="content">
        <div className="left">
          <div className="top">
            <img src={user?.profilepicture} alt="" />
            <h3>{user?.name}</h3>
          </div>
          <div className="details">
            <div className="colums">
              <div className="one">
                <p>Username :</p>
                <p>e-mail :</p>
                <p>Phone :</p>
                <p>Website :</p>
              </div>
              <div className="two">
                <p>{user?.username}</p>
                <p>{user?.email}</p>
                <p>{user?.phone}</p>
                <p>{user?.website}</p>
              </div>
            </div>
          </div>
          <div className="line">
            <hr />
          </div>
          <div className="details">
            <div className="title">
              <h3>Company</h3>
            </div>
            <div className="colums">
              <div className="one">
                <p>Name :</p>
                <p>catchphrase :</p>
                <p>bs :</p>
              </div>
              <div className="two">
                <p>{user?.company?.name}</p>
                <p>{user?.company?.catchPhrase}</p>
                <p>{user?.company?.bs}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="details">
            <div className="title">
              <h3>Address :</h3>
            </div>
            <div className="colums">
              <div className="one">
                <p>Street :</p>
                <p>Suite :</p>
                <p>City :</p>
                <p>Zipcode :</p>
              </div>
              <div className="two">
                <p>{user?.address?.street}</p>
                <p>{user?.address?.suite}</p>
                <p>{user?.address?.city}</p>
                <p>{user?.address?.zipcode}</p>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe titile="our-map" src={`https://maps.google.com/maps?q=${user?.address?.geo?.lat},${user?.address?.geo?.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}>
            </iframe>
            <div className="bottom">
              <p>Lat: <span>{user?.address?.geo?.lat}</span></p>
              <p>Long: <span>{user?.address?.geo?.lng}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About