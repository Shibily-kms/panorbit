import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../pages/layout/Layout'

function User() {
    return (
        <div>
            <Routes>
                <Route path='/:id/*' element={<Layout />} />
            </Routes>
        </div>
    )
}

export default User