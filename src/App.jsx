import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Rootlayout from './layouts/Rootlayout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Product_inside from './pages/Product_inside'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='about' element={<About />} />
      <Route path='contacts' element={<Contacts />} />
      <Route path='product_inside' element={<Product_inside />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
