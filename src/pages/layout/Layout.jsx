import React, { useEffect, useState } from 'react'
import './layout.scss'
import { Routes, Route } from 'react-router-dom'
import About from '../../components/about/About'
import Sidebar from '../../components/side-bar/Sidebar'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import axios from '../../config/axios'
import { setUser } from '../../redux/features/userSlice'

function Layout() {
    const [show, setShow] = useState(false)
    const { id } = useParams();
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!user) {
            axios.get('/api/users.json').then((response) => {
                dispatch(setUser(response.data.users.filter((value, index) => value.id === Number(id))))
            })
        }
    }, [])
    return (
        < div className='layout' >
            {show ?
                <div className="shadow" onClick={() => setShow(false)}></div>
                : ""
            }
            <div className={show ? "sidebar-div show-side-bar" : 'sidebar-div'}>
                <Sidebar id={id} />
            </div>
            <div className="page-div">

                {/* <button onClick={() => setShow((show) => !show)}>sdf</button> */}
                <Routes>
                    <Route path='/profile' element={<About />} />
                </Routes>
            </div>
            <div className="chat-div">

            </div>

        </ div>
    )
}

export default Layout