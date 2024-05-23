import React from 'react'
import TopFooter from './TopFooter'
import BtmFooter from './BtmFooter.jsx'
const Footer = () => {
  return (
    <>
    <div className='topfooter w-full' style={{backgroundColor:"#e8e8e8"}}>
      <div className='max-w-[1240px] mx-auto my-0'>
      <TopFooter/>
      </div>
    </div>
    <div className='btmfooter w-full' style={{backgroundColor:"black"}}>
      <div className='max-w-[1240px] mx-auto my-0'>
      <BtmFooter/>
      </div>
    </div>
   
    </>
    
  )
}

export default Footer
