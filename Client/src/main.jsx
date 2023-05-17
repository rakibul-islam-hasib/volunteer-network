import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'react-tooltip/dist/react-tooltip.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/home/Home'
import Login from './component/user/Login'
import Register from './component/user/Register'
import AuthProvider from './context/AuthProvider'
import Admin from './component/user/Admin'
import List from './component/admin/List'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  }, 
  {
    path : '/admin',
    element : <Admin />,
    children : [
      { path : '/admin', element : <List /> }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
