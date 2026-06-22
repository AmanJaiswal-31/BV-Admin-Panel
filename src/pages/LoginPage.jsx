import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import styles from "./LoginPage.module.css";
import { useNavigate } from 'react-router'


const adminEmail = 'aman123@gmail.com'
const adminPassword = "31102004"

// localStorage.setItem("Password",JSON.stringify(adminPassword));


function LoginPage() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: "",
    }
    )

    useEffect(() => {
        const storedData = localStorage.getItem('email')


        if (storedData) {
            navigate('/dashboard')
        }
    },[navigate])

    function handleChange(e) {
        setData(
            { ...data, [e.target.name]: e.target.value }
        )
    }

    function handleClick(e) {
        e.preventDefault()

        if (data.email === "" || data.password === "") {
            toast.error('Please fill all the Fields')
            return

        } else if (data.password.length < 6) {
            toast.error("Password must be at least 6 characters")
            return
        } else if (data.email !== adminEmail || data.password !== adminPassword) {
            toast.error("Invalid email or password");
            return
        }

        localStorage.setItem("email", adminEmail);
        navigate('/dashboard')
        toast.success('Login successfully!')
        console.log(data)
        setData({
            email: "",
            password: ""
        })
    }
    return (

        <div className={styles.login}>

            <div className={styles.container}>
                <h1>Login Page</h1>

                <form onSubmit={handleClick}>
                    <label>Email: </label>
                    <input type='email' value={data.email} name="email" placeholder='Enter Your Email' onChange={handleChange} /><br /> <br />
                    <label>Password: </label>
                    <input type='password' value={data.password} name="password" placeholder='Enter Password' onChange={handleChange} /> <br /> <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>

        </div>


    )


}

export default LoginPage