import React,{useState} from 'react'
import MensClothingCard from './MensClothingCard';
import MensClothesCardData from './MensClothesCardData';
import ProductModal from '../ProductModal/ProductModal'
import { useOutletContext } from 'react-router-dom';

const MensClothing = () => {
  const { addToCart,warning } = useOutletContext();
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handlePreviewClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };
  return (
    <>
      <div className="wrapper w-full">
        <div className="w-full h-full">
          <div className="widthWrapper my-0 mx-auto flex max-w-[1240px]">
            <div className="w-[100%] py-6 px-2 bg-white">
            <div>
            {
            warning && <span className="float-right bg-slate-200 py-2 px-2 mb-3 text-[13px] rounded-xl text-red-500">The item is already added</span>
          }
          <br />
            </div>
              <div className="grid grid-cols-4 gap-1 mt-8">
                {MensClothesCardData.map((product) => {
                  return (
                    <MensClothingCard
                      key={product.id}
                      product={product}
                      onPreviewClick={handlePreviewClick}
                      addToCart={addToCart} 
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </>
  )
}

export default MensClothing
