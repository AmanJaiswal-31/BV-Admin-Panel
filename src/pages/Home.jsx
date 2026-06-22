import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import style from "./LoginPage.module.css";

function Home() {
    const navigation = useNavigate()
    useEffect(() => {
        const email = localStorage.getItem("email")
        if (email) {
            navigation('/dashboard')
        }
    }, [navigation])

    return (
        <div>
            <h1 className={style.heading}>Home Page</h1>
            <Link to="/login" className={style.loginLink}>Login</Link>
        </div>
    )
}

export default Home