import React from 'react'
import { NavLink } from 'react-router-dom'
import './sidebar.scss'
import { MdKeyboardArrowRight } from 'react-icons/md';

function Sidebar({ id }) {
    return (
        <div className='sidebar'>
            <div className="boader">
                <div className="menu">
                    <ul>
                        <li><NavLink to='/1/profile'>Profile<div className='icon'><MdKeyboardArrowRight /></div></NavLink></li>
                        <li><NavLink to='/1/posts'>Posts<div className='icon'><MdKeyboardArrowRight /></div></NavLink></li>
                        <li><NavLink to='/1/gallery'>Gallery<div className='icon'><MdKeyboardArrowRight /></div></NavLink></li>
                        <li><NavLink to='/1/todo'>ToDo<div className='icon'><MdKeyboardArrowRight /></div></NavLink></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar