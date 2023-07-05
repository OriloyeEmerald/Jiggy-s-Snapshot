import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'


const Searchbar = ({inputVal, setInputVal, fetchImages, handleText}) => {

  const handleInput = (event) => {
    setInputVal(event.target.value)
  }

  const handleBtn = () => {
     setInputVal(' ');
     handleText();
     fetchImages();
     
  }
  return (
     
    <div>
        <input type='search' placeholder='search...' value={inputVal} onChange={handleInput} className='input' />
        <button className='btn' onClick={handleBtn}>
            <MagnifyingGlass color='#a1a1a1'/>
        </button>
        

       
    </div>
  )
}

export default Searchbar