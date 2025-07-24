import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import NotFound from './components/NotFound'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import "./App.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"/home",
        element: <Home />,
      },
      {
        path:"/about",
        element: <About />,
      },
      {
        path:"/portfolio",
        element: <Portfolio />,
      },
      {
        path:"/contact",
        element: <Contact />,
      }, 
      {
        path:"*",
        element: <NotFound />,
      },

    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
