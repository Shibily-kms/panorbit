import React from 'react'
import Header from '../header/Header'
import './posts.scss'

function Posts({ show, setShow }) {

    return (
        <div className='coming'>
            <div className="header-div">
                <Header title={"Posts"} show={show} setShow={setShow} />
            </div>
            <div className="content">
                <h1>Coming Soon</h1>
            </div>
        </div>
    )   
}

export default Posts