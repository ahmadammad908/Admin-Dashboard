import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import User from './Components/User.jsx'
import Verification from './Components/Verification.jsx'
import Main from "./Components/UserMemeberShip.jsx"
import UpdateRequest from "./Components/UpdateRequest.jsx"
import BlockedUser from "./Components/BlockedUser.jsx"
import AddAdmin from "./Components/AddAdmin.jsx"

const router = createBrowserRouter([
  {
    path: "/" , 
    element: <App /> ,
    children:[
      {
        path:"/", 
        element:<User />
      },
      {
        path:"/verification",
        element:<Verification />
      },
      {
        path: "/usermembership",
        element:<Main/>
      },
      {
        path:"/updaterequest",
        element: <UpdateRequest/>
      },
      {
        path:"/blockeduser",
        element:<BlockedUser />
      },
      {
        path:"/addadmin",
        element:<AddAdmin />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
