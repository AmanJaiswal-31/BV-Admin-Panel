import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Home() {
    navigation = useNavigate()
    useEffect(() => {
        const email = localStorage.getItem("Email")
        if (email) {
            navigation('/dashboard')
        }
    }, [navigation])

    return (
        <div>
            <h1 className='my-heading'>Home Page</h1>
            <Link to="/login" className='Login'>Login</Link>
        </div>
    )
}

export default Home