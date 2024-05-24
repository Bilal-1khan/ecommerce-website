import React, { useState } from 'react';

const ProductModal = ({ product, onClose }) => {
  const {
    image,
    productIntro,
    price,
    roundoffPrice,
    sale,
    shippingPrice,
  } = product;

  const [counter,setCounter] = useState(0)

  const decreaseCount =()=>{
    if (counter<=0) {
        setCounter(counter)
    }else{
        setCounter(counter-1)
    }
  }

  const increaseCount =()=>{
    if (counter>=5) {
        setCounter(counter)
    }else{
        setCounter(counter+1)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4  w-[500px]">
        <div>
        <button 
          className="text-black float-right font-semibold text-[15px]" 
          onClick={onClose}
        >
          Close
        </button>
        </div>

          
        <div>
        <div className="imgDiv w-[40%] rounded-2xl flex-1">
          <img className='w-full  rounded-2xl' src={image} alt="product-img" />
        </div>

        <div className='mt-2 p-1'>
          <p className="intro text-sm cursor-default">{productIntro}</p>
          <p className="price text-xl font-semibold cursor-default"><span className="text-sm">PKR</span>{price}<span className="text-sm cursor-default">{roundoffPrice}</span></p>
          <p className="text-red-500 font-medium cursor-default">{sale}</p>
          <p className='text-gray-400 cursor-default'>+Shipping: {shippingPrice}</p>
        </div>
        </div>
       
        

        <div className="qtyCount flex justify-between gap-1 items-center">
          <div className='flex gap-2'>
          <button className='px-4 py-[2px] bg-gray-200 rounded-full' onClick={decreaseCount}>-</button> 
            {counter} 
            <button className='px-4 py-[2px] bg-gray-200 rounded-full' onClick={increaseCount}>+</button>
          </div>
            

            <button className='bg-black text-white text-[15px] px-4 py-2 rounded-xl hover:bg-gray-400 hover:text-black'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
