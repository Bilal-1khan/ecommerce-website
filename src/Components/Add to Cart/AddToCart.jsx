import React, { useState } from 'react';
import { Link,useOutletContext } from 'react-router-dom';

const AddToCart = () => {
  const { cart, setCart } = useOutletContext();
  const [countQty,setCountQty] = useState(1)

const decreaseQuantity=() =>{
    if (countQty==0) {
        setCountQty(0)
    }else{
        setCountQty(countQty-1)
    }
} 

const increaseQuantity=() => {
    if (countQty>=5) {
        setCountQty(countQty)
    }else{
        setCountQty(countQty+1)
    }
}

//   const increaseQuantity = (index) => {
//     const newCart = [...cart];
//     newCart[index].quantity += 1;
//     setCart(newCart);
//   };

//   const decreaseQuantity = (index) => {
//     const newCart = [...cart];
//     if (newCart[index].quantity > 1) {
//       newCart[index].quantity -= 1;
//       setCart(newCart);
//     }
//   };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <div className="cart-wrapper w-full">
      <div className="cart-items bg-neutral-300 w-full h-full">
        <div className="widthWrapper my-0 mx-auto flex max-w-[1240px]">
          <div className="w-[100%] py-6 px-2 bg-white">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            {cart.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {cart.map((product, index) => (
                  <div key={index} className="cart-item border p-4 rounded flex items-center">
                    <img className="w-24 h-24 object-cover mr-4" src={product.image} alt="product" />
                    <div className="flex-1">
                      <p className="font-semibold">{product.productIntro}</p>
                      <p>Price: PKR {product.price}</p>
                      
                      
                      <div className="flex items-center mt-2">
                        <button className="mr-2 px-3 py-1 bg-gray-200" onClick={decreaseQuantity}>-</button>
                        <span>{countQty}</span>
                        <button className="ml-2 px-3 py-1 bg-gray-200" onClick={increaseQuantity}>+</button>
                        <button className="ml-4 px-3 py-1 bg-red-500 text-white" onClick={() => removeFromCart(index)}>Remove</button>
                      </div>
                    </div>
                    <div>
                        <div className='border-gray-200 border w-[200px] px-2 py-4 rounded-lg'>
                            <h1 className='text-2xl font-semibold'>Summary</h1>
                            <p className='font-semibold'>Subtotal : {product.price}</p>
                            <p className='font-semibold'>Shipping fee : {product.shippingFee}</p>
                            <p className='font-bold'>Total price : {(product.price*countQty)+product.shippingFee}</p>
                            <Link to='/checkout'><button className='mt-4 text-white w-full  py-2 text-xl bg-red-500 rounded-xl'>Check out</button></Link>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Your cart is empty.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
