import React, { useEffect, useState } from 'react'
import HomeComp from '../../components/home/Home'
import axios from '../../config/axios'

function Home() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('/api/users.json').then((response) => {
            setUsers(response.data.users)
        })
    }, [])

    return (
        <div>
            <HomeComp users={users} />
        </div>
    )
}

export default Home