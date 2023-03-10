import React, { useEffect, useState } from 'react'
import './chatList.scss'
import { BsChatRight } from 'react-icons/bs';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { RxDotFilled } from 'react-icons/rx';
import axios from '../../config/axios'
import Chat from '../chat/Chat';

function ChatList({ chatShow, setChatShow }) {
    const [users, setUsers] = useState([])
    const [current, setCurrent] = useState({})
    const [show, setShow] = useState()
    useEffect(() => {
        axios.get('/api/users.json').then((response) => {
            setUsers(response.data.users)
        })
    }, [])
    const handleShow = () => {
        setChatShow((state) => !state)
        setShow(false)
    }
    const handleCurrent = (user) => {
        setCurrent(user)
        setShow(true)
    }
    return (
        <div className='chatList'>
            <div className="boader">
                <div className="header" onClick={handleShow}>
                    <div className="left">
                        <div>
                            <BsChatRight />
                        </div>
                        <h4>Chats</h4>
                    </div>
                    <div className="right">
                        {chatShow ? <IoIosArrowDown /> : <IoIosArrowUp />}

                    </div>
                </div>
                {chatShow ?
                    <div className="content">
                        {users[0] ?
                            <>
                                {users.map((value, index) => {
                                    return <div className="profile" onClick={() => handleCurrent(value)}>
                                        <div className="left">
                                            <img src={value?.profilepicture} alt="" />
                                            <p>{value?.name}</p>
                                        </div>
                                        <div className="right">
                                            <RxDotFilled />
                                        </div>
                                    </div>

                                })}
                            </> : <p style={{ textAlign: 'center' }}>Loading...</p>}
                    </div>
                    : ""}
            </div>
            {show ?
                <div className="subChat-div">
                    <Chat data={current} setShow={setShow} />
                </div>
                : ''
            }
        </div>
    )
}

export default ChatList