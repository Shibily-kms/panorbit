import React from 'react'
import './profile.scss'

function Profile({ name, image, center, path }) {
    return (
        <div>
            <div className="profile" style={center ? { justifyContent: 'center' } : {}}>
                <img src={image} alt="" />
                <h4>{name}</h4>
            </div>
        </div>
    )
}

export default Profile