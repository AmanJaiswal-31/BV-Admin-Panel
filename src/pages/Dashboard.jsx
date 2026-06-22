import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'


function Dashboard() {
  const navigation = useNavigate()

  useEffect(() => {
    const email = localStorage.getItem('email')
    if (email === "aman123@gmail.com") {

    } else {
      toast.error("You are Not Authenticated")
      navigation('/')
    }
  }, [navigation])


  return (
    <div >
      <h1 >This is DashBoard page</h1>

    </div>
  )
}


export default Dashboard;