import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Shop from './Components/Shop/Shop'
import MensClothing from './Components/MensClothing/MensClothing'
import Shoes from './Components/Shoes/Shoes'
import NewArrivals from './Components/NewArrivals/NewArrivals'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/menclothing' element={<MensClothing/>}/>
      <Route path='/shoes' element={<Shoes/>}/>
      <Route path='/newarrivals' element={<NewArrivals/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
