import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashborad() {
  const navigation = useNavigate()

  useEffect(() => {
    const email = localStorage.getItem('Email')
    if (email === "aman123@gmail.com") {

    } else {
      toast.error("You are Not Authenticated")
      navigation('/')
    }
  }, [navigation])

  function handleClick() {
    localStorage.clear()
    navigation('/login')
  }
  return (
    <div >
      <h1>This is DashBoard page</h1>
      <br />
      <button type="button" className="btn btn-danger" onClick={handleClick}>LogOut</button>
    </div>
  )
}

export default Dashborad