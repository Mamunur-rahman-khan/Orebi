import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Rootlayout from './layouts/Rootlayout'
import Home from './pages/Home'
import Shop from './pages/Shop'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
