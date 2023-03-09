import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'

function User() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id/profile' element={<Home />} />
            <Route path='/:id/posts' element={<Home />} />
            <Route path='/:id/gallery' element={<Home />} />
            <Route path='/:id/todo' element={<Home />} />
        </Routes>
    )
}

export default User