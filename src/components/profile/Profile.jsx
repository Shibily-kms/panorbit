import React from 'react'
import './profile.scss'
import { useNavigate } from 'react-router-dom'

function Profile({ name, image, center, path }) {
    const navigate = useNavigate()
    return (
        <div>
            <div className="profile" style={center ? { justifyContent: 'center' } : {}} onClick={path ? (() => navigate(path)) : ''}>
                <img src={image} alt="" />
                <h4>{name}</h4>
            </div>
        </div>
    )
}

export default Profile