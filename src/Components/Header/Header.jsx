import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DropDownItems from './DropDownItems';



const Header = ({ size }) => {
  const [open,setOpen] =useState(false)
  return (
    <header className="bg-black px-7 py-4 w-full">
      <div className="my-0 mx-auto max-w-[1240px]">
        <nav className="flex justify-between items-center">
          <div className="logo">
            <Link to="/" className="text-[30px] font-medium text-white">DealsIn</Link>
          </div>
          <div className="profileDrop cursor-pointer relative flex items-center justify-around gap-2">
            <div onClick={()=>setOpen(!open)} className="profile">
              <PermIdentityOutlinedIcon style={{ fontSize: "2rem" }} className="text-white" />
              <ArrowDropDownIcon className="text-4xl text-white" />
              <div className={`dropdn absolute top-[33px] right-[36px] p-1 px-2 bg-white rounded-lg w-[200px] ${open?"active":"hidden"}`}>
                <div className={`flex items-center gap-3 text-[16px] py-1 font-semibold border-b-slate-200 border-b`}>
                  <span className='bg-gray-300 rounded-full p-1'><PermIdentityOutlinedIcon className='text-black rounded-full' style={{ fontSize: "2rem" }}/></span>Welcome,
                  <span className='font-bold'>User</span>
                </div>
                <ul className='mt-2'>
                <DropDownItems/>
                </ul>
              </div>
            </div>
            <div className="addCart relative">
              <Link to="/addtocart">
                <ShoppingCartOutlinedIcon style={{ fontSize: "1.5rem" }} className="text-white" />
                <span className='text-red-500 absolute left-6 text-[18px] bottom-2'>{size}</span>
              </Link>
            </div>
          </div>
        </nav>
        <nav className='btmNavbar'>
          <ul className='flex justify-center gap-1 items-center p-4'>
            <li><NavLink to='' className={({ isActive }) => `block text-white rounded-full py-2 pr-4 pl-4 duration-200 ${isActive ? "bg-gray-500" : "bg-black"} hover:bg-gray-500`}>Home</NavLink></li>
            <li><NavLink to='/shop' className={({ isActive }) => `block text-white rounded-full py-2 pr-4 pl-4 duration-200 ${isActive ? "bg-gray-500" : "bg-black"} hover:bg-gray-500`}>Shop</NavLink></li>
            <li><NavLink to='/menclothing' className={({ isActive }) => `block text-white rounded-full py-2 pr-4 pl-4 duration-200 ${isActive ? "bg-gray-500" : "bg-black"} hover:bg-gray-500`}>Men's Clothing</NavLink></li>
            <li><NavLink to='/shoes' className={({ isActive }) => `block text-white rounded-full py-2 pr-4 pl-4 duration-200 ${isActive ? "bg-gray-500" : "bg-black"} hover:bg-gray-500`}>Shoes</NavLink></li>
            <li><NavLink to='/newarrivals' className={({ isActive }) => `block text-white rounded-full py-2 pr-4 pl-4 duration-200 ${isActive ? "bg-gray-500" : "bg-black"} hover:bg-gray-500`}>New Arrivals</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header