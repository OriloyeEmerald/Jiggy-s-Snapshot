import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'


const Searchbar = ({inputVal, setInputVal, fetchImages}) => {

  const handleInput = (event) => {
    setInputVal(event.target.value)
  }

  const handleBtn = () => {
     setInputVal(' ');
     fetchImages();
  }
  return (

    <div>
        <input type='search' placeholder='search...' value={inputVal} onChange={handleInput} className='text-black normal-case text-left px-4 py-1 font-sm rounded border-none outline-none mt-4 mb-3 bg-blue-200' />
        <button className='rounded-r px-2 py-1 outline-none border-none' onClick={handleBtn}>
            <MagnifyingGlass color='#a1a1a1'/>
        </button>
        

       
    </div>
  )
}

export default Searchbar