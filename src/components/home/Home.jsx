import React from 'react'
import './home.scss';
import Profile from '../profile/Profile';

function Home({ users }) {
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
                                    return <Profile key={index} name={value.name} image={value.profilepicture} path={'/' + value.id + '/profle'} />
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