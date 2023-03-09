import React, { useEffect, useState } from 'react'
import './card.scss'
import Profile from '../profile/Profile'
import axios from '../../config/axios'
import { useSelector } from 'react-redux'

function Card() {
    const [users, setUsers] = useState([])
    const { user } = useSelector((state) => state.user)
    useEffect(() => {
        axios.get('/api/users.json').then((response) => {
            setUsers([response.data.users[1], response.data.users[2]])
        })
    }, [])
    return (
        <div className='card'>
            <div className="top">
                <div className="image">
                    <img src={user?.profilepicture} alt="" />
                </div>
                <h4>{user?.name}</h4>
                <h5>{user?.email}</h5>
            </div>
            <div className="users">
                {users[0] ?
                    <>
                        {users.map((value, index) => {
                            return <div className="profile-div" key={index}>
                                <Profile center={true} name={value.name} image={value.profilepicture} />
                            </div>
                        })}
                    </> : 'Loading...'}
            </div>
            <div className="button">
                <button>Sign out</button>
            </div>
        </div>
    )
}

export default Card