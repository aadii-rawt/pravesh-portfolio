
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Contact from './pages/Admin';

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
