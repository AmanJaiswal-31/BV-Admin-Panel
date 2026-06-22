import React from 'react'
import LoginPage from './pages/LoginPage'
import { Toaster } from "react-hot-toast"
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './pages/Home';
import College from './pages/College';
import User from './pages/User';
import Material from './pages/Material';
import Notice from './pages/Notice';
import Syllabus from './pages/Syllabus';
import AdminPannelLayout from './Layout/AdminPannelLayout';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/dashboard",
      element: <AdminPannelLayout />
    },
    {
      path: "/college",
      element: <College />
    },
    {
      path: "/user",
      element: <User />
    },
    {
      path: "/material",
      element: <Material />
    },
    {
      path: "/notice",
      element: <Notice />
    },
    {
      path: "/syllabus",
      element: <Syllabus />
    }

  ]
)
function App() {
  return (
    <div>
      <Toaster />
      <RouterProvider router={router} />
    </div>
  )
}

export default App