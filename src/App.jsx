import React from 'react'
import LoginPage from './pages/LoginPage'
import { Toaster } from "react-hot-toast"
import { createBrowserRouter, RouterProvider } from "react-router";
import Dashborad from './pages/Dashborad'
import Home from './pages/Home';


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/login",
      element:<LoginPage/>
    },
    {
      path:"/dashboard",
      element:<Dashborad/>
    }
  ]
)
function App() {
  return (
    <div>
      <Toaster/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App