import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MyCreateRoute from './MyCreateRoute/MyCreateRoute.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Firebase/Authprovider/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MyCreateRoute}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
