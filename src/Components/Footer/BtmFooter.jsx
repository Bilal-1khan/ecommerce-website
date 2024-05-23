import React from 'react'
import { Link } from 'react-router-dom'
const BtmFooter = () => {
  return (
    <>
      <div className='btmFooter'>
      <div className="btmFooterSection w-full px-11 py-7">
      <span className='text-base text-gray-400'>
        <Link className=' mx-1 hover:text-gray-200'>Intellectual Property Protection</Link> - 
        <Link className=' mx-1 hover:text-gray-200'>Privacy Policy</Link> - 
        <Link className=' mx-1 hover:text-gray-200'>Sitemap</Link> - 
        <Link className=' mx-1 hover:text-gray-200'>Terms of Use</Link> - 
        <Link className=' mx-1 hover:text-gray-200'>Great Value</Link> - 
        <Link className=' mx-1 hover:text-gray-200'>Transaction Services</Link> - 
        <Link className=' mx-1 hover:text-gray-200'>Imprint</Link>
        </span>
        {/* btm section */}
      <span className='text-base text-gray-400'>
        <Link className=' mx-1 hover:text-gray-200'>Terms and Conditions for Customers</Link> - 
        <Link className=' mx-1 hover:text-gray-200'>User Information Legal Enquiry Guide  
        </Link>©️ 2010-2024 
        <Link className=' mx-1 hover:text-gray-200'>Bilalsuri.com</Link> - 
        <Link className=' mx-1 hover:text-gray-200'>Sitemap</Link> - 
        <Link className=' mx-1 hover:text-gray-200'>Terms of Use</Link> - 
        <Link className=' mx-1 hover:text-gray-200'>Great Value</Link>
        </span>
      </div>
    </div> 
    </>
  )
}

export default BtmFooter
