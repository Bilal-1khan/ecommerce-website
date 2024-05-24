import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  const [cart, setCart] = useState([]);
  const [warning,setWarning] = useState(false)

  const addToCart = (data) => {
    let isPresent = false
    cart.forEach((product)=>{
      if (data.id=== product.id) {
        isPresent=true
      }
    })
    if (isPresent) {
      setWarning(true)
      setInterval(()=>{
        setWarning(false)
      },40000)
      return;
    }
    setCart([...cart,data])

  };
  return (
    <>
      <Header size={cart.length} />
      <Outlet context={{ cart, addToCart,setCart,warning}} />
      <Footer />
    </>
  )
}

export default App
