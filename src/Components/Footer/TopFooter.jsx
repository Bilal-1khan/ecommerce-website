import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
const TopFooter = () => {
  return (
    <>
       <div className="topFooterSection p-11 w-full">
      {/* footer top section */}
      <div className="topSection border-b-4 flex gap-2 justify-around py-3">

        <div className="p-1">
          <h2 className='text-black font-semibold text-lg mb-3'>Customer services</h2>
          <p className='text-gray-600'>Help Center</p>
          <p className='text-gray-600'>Transaction Services</p>
          <p className='text-gray-600'>Terms and Conditions</p>
          <p className='text-gray-600'>Consumers Transactions</p>
          <p className='text-gray-600'>Take our feedback survey</p>
        </div>

        <div className='flex flex-col gap-2'>
        <div className="p-1">
          <h2 className='text-black font-semibold text-lg mb-3'>Shopping with us</h2>
          <p className='text-gray-600'>Making payments</p>
          <p className='text-gray-600'>Delivery options</p>
          <p className='text-gray-600'>Buyer Protection</p>
        </div>

        <div className="p-1">
          <h2 className='text-black font-semibold text-lg mb-3'>Collaborate with us</h2>
          <p className='text-gray-600'>Partnerships</p>
          <p className='text-gray-600'>Affiliate program</p>
          <p className='text-gray-600'>Seller Log In</p>
        </div>
        </div>

        <div className="p-1">
          <h2 className='text-black font-semibold text-lg mb-3'>Pay with</h2>
          <div className='flex flex-col gap-1'>
            <div className='flex gap-1'>
            <span className='w-10'><img className='w-10' src="https://img.alicdn.com/tfs/TB1xcMWdEKF3KVjSZFEXXXExFXa-68-48.png" alt="img1" /></span>
            <span className='w-10'> <img className='w-10' src="https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png" alt="img2" /></span>
            <span className='w-10'> <img className='w-10' src="https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png" alt="img3" /></span>
            <span className='w-10'> <img className='w-10' src="https://ae01.alicdn.com/kf/S91ee3e0f4fde4535aad35f7c30f6bacfh/216x144.png" alt="img4" /></span>
            <span className='w-10'> <img className='w-10' src="https://ae01.alicdn.com/kf/S8df1a1d99c8049d1b1a86c9a144719b6W/216x144.png" alt="img5" /></span>
            <span className='w-10'> <img className='w-10' src="https://ae01.alicdn.com/kf/S173da9e53a234dcb9795cebd1856c4d7J/216x144.png" alt="img6" /></span>
            </div>
            <div className='flex gap-1'>
            <span className='w-10'><img className='w-10' src="https://img.alicdn.com/tfs/TB1xcMWdEKF3KVjSZFEXXXExFXa-68-48.png" alt="img1" /></span>
            <span className='w-10'> <img className='w-10' src="https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png" alt="img2" /></span>
            <span className='w-10'> <img className='w-10' src="https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png" alt="img3" /></span>
            <span className='w-10'> <img className='w-10' src="https://ae01.alicdn.com/kf/S91ee3e0f4fde4535aad35f7c30f6bacfh/216x144.png" alt="img4" /></span>
            <span className='w-10'> <img className='w-10' src="https://ae01.alicdn.com/kf/S8df1a1d99c8049d1b1a86c9a144719b6W/216x144.png" alt="img5" /></span>
            <span className='w-10'> <img className='w-10' src="https://ae01.alicdn.com/kf/S173da9e53a234dcb9795cebd1856c4d7J/216x144.png" alt="img6" /></span>
            </div>
          </div>
        </div>

        <div className="p-1">
          <h2 className='text-black font-semibold text-lg mb-2'>Stay connected</h2>
          <div className='flex flex-col gap-1'>
            <div className='flex gap-1 mt-2'>
            <Link><WhatsAppIcon className='text-xs'/></Link>
            <Link><InstagramIcon className='text-xs'/></Link>
            <Link><XIcon className='text-xs'/></Link>
            <Link><FacebookIcon className='text-xs'/></Link>
            </div>
          </div>
        </div>

      </div>
      {/* footer middle section */}
      <div className="btmSection my-1 py-2 grid grid-cols-2 gap-6 px-8">
        <div className=' my-7 px-1'>
          <h2 className='text-black text-xl mb-2 font-semibold'>Help</h2>
          <p className='text-gray-600 text-sm'>
            <Link className='hover:text-orange-400'>Help Center</Link>,
            <Link className='hover:text-orange-400'> Disputes & Reports</Link>,
            <Link className='hover:text-orange-400'> Buyer Protection</Link>,
            <Link className='hover:text-orange-400'>Report IPR infringement</Link>,
            <Link className='hover:text-orange-400'>Regulated Information</Link>,
            <Link className='hover:text-orange-400'>Integrity Compliance</Link>,
            <Link className='hover:text-orange-400'>Transparency Center</Link>
            </p>
        </div>

        <div className=' my-7 px-1'>
          <h2 className='text-black text-xl mb-2 font-semibold'>Multi-Language Sites</h2>
          <p className='text-gray-600 text-sm'>
            <Link className='hover:text-orange-400'>Russian </Link>,
            <Link className='hover:text-orange-400'> Portuguese</Link>,
            <Link className='hover:text-orange-400'> Spanish</Link>,
            <Link className='hover:text-orange-400'> French</Link>,
            <Link className='hover:text-orange-400'> Urdu</Link>,
            <Link className='hover:text-orange-400'> German</Link>,
            <Link className='hover:text-orange-400'> Italian</Link>,
            <Link className='hover:text-orange-400'> Dutch</Link>,
            <Link className='hover:text-orange-400'> Turkish</Link>,
            <Link className='hover:text-orange-400'> Japanese</Link>,
            <Link className='hover:text-orange-400'> Korean</Link>,
            <Link className='hover:text-orange-400'> Thai</Link>,
            <Link className='hover:text-orange-400'> Vietnamese</Link>,
            <Link className='hover:text-orange-400'> Arabic</Link>,
            <Link className='hover:text-orange-400'> Polish</Link>,
          </p>
        </div>

        <div className=' my-7 px-1'>
          <h2 className='text-black text-xl mb-2 font-semibold'>Browse by Category</h2>
          <p className='text-gray-600 text-sm'>
            <Link className='hover:text-orange-400'>All Popular</Link>,
            <Link className='hover:text-orange-400'> Product</Link>,
            <Link className='hover:text-orange-400'>  Promotion</Link>,
            <Link className='hover:text-orange-400'> Low Price</Link>,
            <Link className='hover:text-orange-400'>Great Value</Link>,
            <Link className='hover:text-orange-400'> Reviews</Link>,
            <Link className='hover:text-orange-400'> Blog</Link>
            </p>
        </div>

        <div className=' my-7 px-1'>
          <h2 className='text-black text-xl mb-2 font-semibold'>BKS Group</h2>
          <p className='text-gray-600 text-sm'>
            <Link className='hover:text-orange-400'>BKS Group Website</Link>,
            <Link className='hover:text-orange-400'>Portfolio</Link>
            </p>
        </div>        
      </div>
    </div>
    </>
  )
}

export default TopFooter
