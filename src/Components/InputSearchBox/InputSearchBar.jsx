import React from 'react'

const InputSearchBar = ({ onSearch }) => {
    return (
        <>
          <div className="search-bar text-center my-10">
            <input
               onChange={(e) => { onSearch(e.target.value) }}
               className='searchbar w-[500px] text-black p-1 px-2 py-3 outline-none rounded-xl'
               placeholder="Search items"
               type="text"
            />
          </div>
        </>
    )
}

export default InputSearchBar
