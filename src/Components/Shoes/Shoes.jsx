import React,{useState} from 'react'
import ShoesCard from './ShoesCard';
import ShoesCardData from './ShoesCardData';
import ProductModal from '../ProductModal/ProductModal'
import { useOutletContext } from 'react-router-dom';
const Shoes = () => {
  const { addToCart } = useOutletContext();
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
        <div className="bg-neutral-300 w-full h-full">
          <div className="widthWrapper my-0 mx-auto flex max-w-[1240px]">
            <div className="w-[100%] py-6 px-2 bg-white">

              <div className="grid grid-cols-4 gap-1">
                {ShoesCardData.map((product) => {
                  return (
                    <ShoesCard
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

export default Shoes
