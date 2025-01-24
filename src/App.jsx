import { useState } from 'react'

import Navbar from './components/Navbar'
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/admin';

function App() {
 
  const router = createBrowserRouter([
    {
      path : "",
      element: <Layout />,
      children : [
        {
          path: "/",
          element: <Home /> 
        },{
          path : "/about",
          element: <About />
        },{
          path: "/contact",
          element: <Contact />
        }
      ]
    },
    {
      path: "/admin",
      element: <Admin />
    }
  ])

  return (
    <RouterProvider router={router} />

  )
}

export default App
