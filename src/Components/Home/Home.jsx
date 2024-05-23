import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { HomeCardData } from "./HomeCardData";
import InputSearchBar from "../InputSearchBox/InputSearchBar";
import ProductModal from './ProductModal';

const Home = () => {
  const [data, setData] = useState(HomeCardData);
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const onSearch = (val) => {
    if (val.trim()) {
      const filterData = HomeCardData.filter((i) => {
        return i.name.toLowerCase().includes(val.toLowerCase());
      });
      setData(filterData);
    } else {
      setData(HomeCardData);
    }
  };

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
              <InputSearchBar onSearch={onSearch} />
              <div className="grid grid-cols-4 gap-1">
                {data.map((product) => {
                  return (
                    <HomeCard
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
  );
};

export default Home;
