import React from "react"
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
const DropDownItems =()=>{
    return(
      <>
      <li className="px-2 py-2 hover:bg-gray-300 hover:hover:text-red-500 cursor-pointer rounded-xl">
        <div className='flex gap-2'><ArticleOutlinedIcon/><span></span> <span>My Order</span></div>
      </li>
      <li className="px-2 py-2 hover:bg-gray-300 hover:hover:text-red-500 cursor-pointer rounded-xl">
        <div className='flex gap-2'><PaidOutlinedIcon/><span></span> <span>My Coins</span></div>
      </li>
      <li className="px-2 py-2 hover:bg-gray-300 hover:hover:text-red-500 cursor-pointer rounded-xl">
        <div className='flex gap-2'><ChatOutlinedIcon/><span></span> <span>Message Center</span></div>
      </li>
      <li className="px-2 py-2 hover:bg-gray-300 hover:hover:text-red-500 cursor-pointer rounded-xl">
        <div className='flex gap-2'><CreditCardOutlinedIcon/><span></span> <span>Payment</span></div>
      </li>
      <li className="px-2 py-2 hover:bg-gray-300 hover:hover:text-red-500 cursor-pointer rounded-xl">
        <div className='flex gap-2'><FavoriteBorderOutlinedIcon/><span></span> <span>Wish List</span></div>
      </li>
      <li className="px-2 py-2 hover:bg-gray-300 hover:hover:text-red-500 cursor-pointer rounded-xl">
        <div className='flex gap-2'><ConfirmationNumberOutlinedIcon/><span></span> <span>My Coupons</span></div>
      </li>
      </>
    )
  }

  export default DropDownItems;