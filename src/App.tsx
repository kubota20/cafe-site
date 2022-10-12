import { FC } from 'react'
import Home from './pages/Home'

import ProductList from './pages/ProductList'
import Inquiry from './pages/Inquiry'
import NotFound from './pages/NotFound'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/inquiry" element={<Inquiry />} />

        {/* 404ページ */}
        <Route path="/*/" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
