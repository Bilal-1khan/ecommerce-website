import React,{useState} from 'react'
import MensClothingCard from './MensClothingCard';
import MensClothesCardData from './MensClothesCardData';
import ProductModal from '../ProductModal/ProductModal'

const MensClothing = () => {

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
                {MensClothesCardData.map((product) => {
                  return (
                    <MensClothingCard
                      key={product.id}
                      product={product}
                      onPreviewClick={handlePreviewClick}
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
