import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
const InputSearchBar = ({ onSearch }) => {
    return (
        <>
          <div className="search-bar  justify-around rounded-2xl  mx-auto my-10 w-[500px]  flex items-center">
            <input
               onChange={(e) => { onSearch(e.target.value) }}
               className=' w-[420px] rounded-2xl text-black p-1 px-2 py-3 border-0 outline-none'
               placeholder="Search items"
               type="text"
            />
            <button className="bg-black rounded-full px-4 py-[5px]">
            <SearchIcon className="text-white" />
          </button>
          </div>
        </>
    )
}

export default InputSearchBar
