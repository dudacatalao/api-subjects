import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import NewMateria from './routes/NewMateria.jsx'
import NewTurma from './routes/NewTurma.jsx'
import DeleteTurma from './routes/DeleteTurma.jsx'
import DeleteMateria from './routes/DeleteMateria.jsx'
import UpdateTurma from './routes/UpdateTurma.jsx'
import UpdateMateria from './routes/UpdateMateria.jsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path: '/', 
        element: <Home/>,
      },
      {
        path:'/novamateria',
        element: <NewMateria/>,
      },
      {
        path:'/novaturma',
        element: <NewTurma/>,
      },
      {
        path:'/deleteturma',
        element: <DeleteTurma/>,
      },
      {
        path:'/deletemateria',
        element: <DeleteMateria/>,
      },
      {
        path:'/updateturma',
        element: <UpdateTurma/>,
      },
      {
        path:'/updatemateria',
        element: <UpdateMateria/>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
