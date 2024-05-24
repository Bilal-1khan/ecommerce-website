import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (data) => {
    let isPresent = false
    cart.forEach((product)=>{
      if (data.id=== product.id) {
        isPresent=true
      }
    })
    if (isPresent) return;

    setCart([...cart,data])
    // setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      <Header size={cart.length} />
      <Outlet context={{ cart, addToCart,setCart}} />
      <Footer />
    </>
  )
}

export default App
