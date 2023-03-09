import React from 'react'
import './header.scss'
import Profile from '../profile/Profile'
import { useSelector } from 'react-redux'

function Header({ title }) {
    const { user } = useSelector((state) => state.user)
    return (
        <div className='header'>
            <div className="left">
                <h2>{title}</h2>
            </div>
            <div className="right">
                <div className="icon">

                </div>
                <div className="profile-div" >
                    <Profile name={user?.name} image={user?.profilepicture} />
                </div>
            </div>
        </div>
    )
}

export default Header