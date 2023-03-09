import React from 'react'
import './profile.scss'

function Profile({ name, image, center }) {
    return (
        <div>
            <div className="profile" style={center ? { justifyContent: 'center' } : {}}>
                <img src={image} alt="" />
                <h4 style={center ? { fontSize: '12px' } : {}}>{name}</h4>
            </div>
        </div>
    )
}

export default Profile