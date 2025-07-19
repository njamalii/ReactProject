import { useEffect, useState } from 'react';
import './App.css'
import BottomNavbar from './Components/BottomNavbar'
import Header from './Components/Header'
import $ from "jquery";
import Card from './Components/Card';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './Pages/CartPage';
import Layout from './Layout';
import Details from './Pages/Details';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
  const [cart, setCart] = useState([]);///array of product id which is added to cart
  return (
    <>
      <BrowserRouter>
        <Layout cart={cart}>
          <Routes>
            <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
            <Route path="/details/:id" element={<Details cart={cart} setCart={setCart}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>

    </>
  )
}

export default App
