import React, { useEffect, useState } from 'react'
import './layout.scss'
import { Routes, Route } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import axios from '../../config/axios'
import { setUser } from '../../redux/features/userSlice'
import About from '../../components/about/About'
import Posts from '../../components/posts/Posts'
import Gallery from '../../components/gallery/Gallery'
import Todo from '../../components/todo/Todo'
import Sidebar from '../../components/side-bar/Sidebar'
import ChatList from '../../components/chat-list/ChatList'

function Layout() {
    const [show, setShow] = useState(false)
    const [chatShow, setChatShow] = useState(false)
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
    const handleHide = () => {
        setShow(false)
        setChatShow(false)
    }
    return (
        < div className='layout' >
            {show || chatShow ?
                <div className="shadow" onClick={handleHide}></div>
                : ""
            }
            <div className={show ? "sidebar-div show-side-bar" : 'sidebar-div'}>
                <Sidebar id={id} />
            </div>
            <div className="page-div">
                <Routes>
                    <Route path='/profile' element={<About setShow={setShow} show={show} />} />
                    <Route path='/posts' element={<Posts setShow={setShow} show={show} />} />
                    <Route path='/gallery' element={<Gallery setShow={setShow} show={show} />} />
                    <Route path='/todo' element={<Todo setShow={setShow} show={show} />} />
                </Routes>
            </div>
            <div className="chat-div">
                <ChatList chatShow={chatShow} setChatShow={setChatShow} />
            </div>

        </ div>
    )
}

export default Layout