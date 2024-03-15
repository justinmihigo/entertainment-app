import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Tvseries } from './components/series/tv-series'
import { Movies } from './components/movies/movies'
import { Bookmarked } from './components/bookmarked/bookmarked'
import Login from './components/authentication/login'
import Signup from './components/authentication/sign-up'


function App() {
  const router = createBrowserRouter([
{
  path: "/",
  element: <Home />
},
{
  path: "/tv-series",
  element: <Tvseries />
},
{
  path:"/movies",
  element:<Movies/>
},
{
  path:"/bookmarks",
  element:<Bookmarked/>
},
{
  path:"login",
  element:<Login/>
},
{
  path:"/sign-up",
  element:<Signup/>
}

  ])
  return (
    <RouterProvider router={router}/>
    // <div>
    //   <div className='flexing'>
    // <Navbar/>
    // <Home/>
    // {/* <Test data={datas} /> */}
    // </div>
    // </div>
    
  )
}

export default App
