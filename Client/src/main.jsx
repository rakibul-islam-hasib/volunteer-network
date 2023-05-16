import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/home/Home'
import Login from './component/user/Login'
import Register from './component/user/Register'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {path:'/',element:<Home />},
    ]
  },
  {
    path: '/login',
    element: <Login />,
  }, 
  {
    path: '/register',
    element: <Register />,
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
