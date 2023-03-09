import React, { useState } from 'react'
import './layout.scss'
import { Routes, Route } from 'react-router-dom'
import About from '../../components/about/About'
import Sidebar from '../../components/side-bar/Sidebar'

function Layout() {
    const [show, setShow] = useState(false)
    return (
        < div className='layout' >
            {show ?
                <div className="shadow" onClick={() => setShow(false)}></div>
                : ""
            }
            <div className={show ? "sidebar-div show-side-bar" : 'sidebar-div'}>
                <Sidebar id="" />
            </div>
            <div className="page-div">
                <div className="header-div">
                    <button onClick={() => setShow((show) => !show)}>sdf</button>
                </div>
                <div className="content-div">
                    <Routes>
                        <Route path='/profile' element={<About />} />
                    </Routes>
                </div>
                <div className="chat-div">

                </div>
            </div>

        </ div>
    )
}

export default Layout