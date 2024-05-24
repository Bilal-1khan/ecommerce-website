import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const MensClothingCard = ({product,onPreviewClick }) => {
    const {
      image,
      productIntro,
      price,
      roundoffPrice,
      sale,
      shippingPrice,
    } = product;
  
    return (
      <>
        <div className="card border-[1px]  rounded-2xl p-1 bg-white flex flex-col">
          <div className="imgDiv w-[100%] rounded-2xl flex-1">
            <img className='w-full rounded-2xl' src={image} alt="shop-card-img" />
          </div>
          <div className='mt-2 p-1'>
            <p className="intro text-sm cursor-default">{productIntro}</p>
            <p className="price text-xl font-semibold cursor-default"><span className="text-sm">PKR</span>{price}<span className="text-sm cursor-default">{roundoffPrice}</span></p>
            <p className="text-red-500 font-medium cursor-default">{sale}</p>
            <p className='text-gray-400 cursor-default'>+Shipping: {shippingPrice}</p>
            <div className="mt-5 flex justify-between cursor-default">
              <button 
                className="rounded-full bg-black text-white py-2 px-5"
                onClick={() => onPreviewClick(product)}
              >
                Preview
              </button>
              <button className="bg-black rounded-full py-2 px-5">
                <ShoppingCartOutlinedIcon className="text-white"/>
              </button>
            </div>
          </div>
        </div> 
      </>
    )
  }

export default MensClothingCard
