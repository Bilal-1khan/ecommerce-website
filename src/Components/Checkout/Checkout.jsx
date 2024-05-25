import React from "react";

import MonthBox from "./MonthBox";
import YearBox from "./YearBox";
import CardNumber from "./CardNumber";
import CardHolderName from "./CardHolderName";
import CVVNumber from "./CVVNumber";
const Checkout = () => {
  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="max-w-[1240px] mx-auto my-0 p-3">
          <div className="paymentMainDiv">
            <div className="text-center">
              <h1 className="font-semibold text-[15px]">
                Provide further information
              </h1>
              <p className="text-[12px] text-green-600">
                Your payment information is safe with us
              </p>
            </div>
            <div className="flex gap-2 bg-orange-100 px-3 mt-3 mb-4 py-3 rounded-xl">
              <span className="font-semibold">Add a new card</span>
              <span className="flex mx-3">
                <span className="w-8">
                  <img
                    className="w-8"
                    src="https://img.alicdn.com/tfs/TB1xcMWdEKF3KVjSZFEXXXExFXa-68-48.png"
                    alt="img1"
                  />
                </span>
                <span className="w-8">
                  {" "}
                  <img
                    className="w-8"
                    src="https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png"
                    alt="img2"
                  />
                </span>
                <span className="w-8">
                  {" "}
                  <img
                    className="w-8"
                    src="https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png"
                    alt="img3"
                  />
                </span>
                <span className="w-8">
                  {" "}
                  <img
                    className="w-8"
                    src="https://ae01.alicdn.com/kf/S91ee3e0f4fde4535aad35f7c30f6bacfh/216x144.png"
                    alt="img4"
                  />
                </span>
              </span>
            </div>
            <div  className="mt-10">
              <div className="flex gap-1">
                <CardNumber/>
                <CardHolderName/>
              </div>
              <div className="mt-5">
                  <MonthBox/>
                  <YearBox/>
                  <CVVNumber/>
              </div>
              <div className="mt-10">
                <p className="text-gray-500"><input type="radio" name="radio1" id="radio" /> Save card details</p>
                <p className="text-gray-500 text-[13px] mx-2">Your order will be processed in USD</p>
              </div>
              
            </div>
           
          </div>
          <div className="text-center mt-4">
          <button className="rounded-xl bg-black text-white px-3 py-4 w-1/2 ">
                Save & Confirm
              </button>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Checkout;
