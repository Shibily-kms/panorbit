import React from 'react'
import './chat.scss'
import { IoIosArrowDown } from 'react-icons/io';
import { IoClose, IoSend } from 'react-icons/io5';

function Chat({ data, setShow }) {
    return (
        <div className='chat'>
            <div className="boader" >
                <div className="header" onClick={() => setShow((state) => !state)}>
                    <div className="left">
                        <img src={data?.profilepicture} alt="" />
                        <h4>{data?.name}</h4>
                    </div>
                    <div className="right">
                        <IoIosArrowDown />
                        <IoClose />
                    </div>
                </div>
                <div className="content">
                    <div className="message-div">
                        <div className="message">
                            <p>Lorem, ipsum dolor sit amet </p>
                        </div>
                        <div className="time">
                            <p>09:16 PM</p>
                        </div>
                        <div className="message right">
                            <p>Lorem, ipsum dolor sit amet </p>
                        </div>
                        <div className="message right">
                            <p>Lorem, ipsum dolor sit amet </p>
                        </div>
                    </div>
                    <div className="input-div">
                        <input type="text" />
                        <IoSend />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat