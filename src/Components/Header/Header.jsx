import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  return (
    <>
      <header className="bg-black px-7 py-4 w-full">
        <div className="my-0 mx-auto max-w-[1240px]">
          {/* Top navgation bar */}
        <nav className="flex justify-between items-center">
          {/* logo */}
        <div className="logo">
          <Link to="/" className="text-[30px] font-medium text-white">
            DealsIn
          </Link>
        </div>
        {/* profile dropdwon/dropup */}
        <div className="profileDrop cursor-pointer flex items-center justify-around gap-2">
          <div className="profile">
          <PermIdentityOutlinedIcon
            style={{ fontSize: "2rem" }}
            className="text-white"
          />
          <ArrowDropDownIcon className="text-4xl text-white" />
          </div>
          <div className="addCart">
          <Link to="/addtocart">
            <ShoppingCartOutlinedIcon
              style={{ fontSize: "1.5rem" }}
              className="text-white"
            />
          </Link>
        </div>
        </div>

        {/* add to cart */}
        
      </nav>

      {/* bottom navigation bar */}
      <nav className='btmNavbar'>
          <ul className='flex justify-center gap-1 items-center p-4'>
            <li>
              <NavLink 
              to=''  
              className={({isActive}) =>
              `block text-white rounded-full py-2 pr-4 pl-4 duration-200 ${isActive ? "bg-gray-500" : "bg-black"}  hover:bg-gray-500`
              }> Home
              </NavLink>
            </li>
            <li>
              <NavLink 
              to='/shop'  
              className={({isActive}) =>
                `block text-white rounded-full py-2 pr-4 pl-4 duration-200 ${isActive ? "bg-gray-500" : "bg-black"}  hover:bg-gray-500`
                }> Shop
              </NavLink>
            </li>
            <li>
              <NavLink to='/menclothing' className={({isActive}) =>
              `block text-white rounded-full py-2 pr-4 pl-4 duration-200 ${isActive ? "bg-gray-500" : "bg-black"}  hover:bg-gray-500`
              }>Men's Clothing</NavLink>
            </li>
            <li>
              <NavLink to='/shoes' className={({isActive}) =>
              `block text-white rounded-full py-2 pr-4 pl-4 duration-200 ${isActive ? "bg-gray-500" : "bg-black"}  hover:bg-gray-500`
              }>Shoes</NavLink>
            </li>
            <li>
              <NavLink to='/newarrivals' className={({isActive}) =>
              `block text-white rounded-full py-2 pr-4 pl-4 duration-200 ${isActive ? "bg-gray-500" : "bg-black"}  hover:bg-gray-500`
              }>NewArrivals</NavLink>
            </li>
          </ul>
        </nav>
        </div>
      </header>
    </>
  )
}

export default Header
