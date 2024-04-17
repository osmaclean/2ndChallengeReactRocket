import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { AddToCart } from './pages/AddToCart'
import { Thanks } from './pages/Thanks'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/addToCart" element={<AddToCart />} />
        <Route path="/thanks" element={<Thanks />} />
      </Route>
    </Routes>
  )
}
