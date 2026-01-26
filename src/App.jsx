import Navbar from './components/navbar/Navbar'
import './layout.scss'
import HomePage from './routes/homePage/homePage'
import { createBrowserRouter, RouterProvider, Route, Link, } from 'react-router-dom'
import ListPage from './routes/homePage/listPage/listPage'
import Layout from './routes/layout/layout'
import SinglePage from './routes/singlePage/singlePage'
import ProfilePage from './routes/profilePage/profliePage'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<HomePage/>
        },
        {
          path:'/list',
          element:<ListPage/>
        },
        {
          path:'/:id',
          element:<SinglePage/>
        },
        {
          path:'/profile',
          element:<ProfilePage/>
        }
      ]
    },

  ])
  


  return (
  

    <RouterProvider router={router}/>
  )
}

export default App