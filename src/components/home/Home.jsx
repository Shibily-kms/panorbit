import React from 'react'
import './home.scss';
import Profile from '../profile/Profile';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/features/userSlice'
import { useNavigate } from 'react-router-dom';

function Home({ users }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = (value) => {
        console.log('work');
        dispatch(setUser([value]))
        navigate('/' + value.id + '/profile')
    }

    return (
        <div>
            <div className="home">
                <div className="background-model">
                </div>
                <div className="boader">
                    <div className="top">
                        <h3>Select an account</h3>
                    </div>
                    <div className="content">
                        {users[0] ?
                            <>
                                {users.map((value, index) => {
                                    return <div className="profile-div" onClick={() => handleClick(value)}>
                                        <Profile key={index} name={value.name} image={value.profilepicture} />
                                    </div>
                                })}
                            </>
                            : 'Loading'}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home