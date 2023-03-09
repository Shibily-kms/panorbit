import React, { useState } from 'react'
import './header.scss'
import Profile from '../profile/Profile'
import { useSelector } from 'react-redux'
import { CgMenuRight } from 'react-icons/cg';
import Card from '../card/Card';

function Header({ title, setShow }) {
    const { user } = useSelector((state) => state.user)
    const [card, setCard] = useState(false)
    return (
        <div className='header'>
            {card ?
                <div className="card-div">
                    <Card />
                </div>
                :
                ""}
            <div className="left">
                <h2>{title}</h2>
            </div>
            <div className="right">
                <div className="icon">
                    <CgMenuRight onClick={() => setShow((show) => !show)} />
                </div>
                <div className="profile-div" onClick={() => setCard((card) => !card)} >
                    <Profile name={user?.name} image={user?.profilepicture} />
                </div>
            </div>
        </div>
    )
}

export default Header