import React from 'react'

const Buttons = ({setInputVal, fetchImages}) => {
    const handleButton = async (selection) => {
      await setInputVal(selection)
       fetchImages();
    }

  return (
    <div className='m-3'>
        <button className='rounded px-3 bg-sky-700 text-black  m-2 hover:bg-sky-200' onClick={() => handleButton('Food')}>Food</button>
        <button className='rounded px-3 bg-sky-700 text-black m-2 hover:bg-sky-200' onClick={() => handleButton('Cars')}>Cars</button>
        <button className='rounded px-3 bg-sky-700 text-black  m-2 hover:bg-sky-200' onClick={() => handleButton('Beaches')}>Beaches</button>
        <button className='rounded px-3 bg-sky-700 text-black  m-2 hover:bg-sky-200' onClick={() => handleButton('Sports')}>Sports</button>
    </div>
  )
}

export default Buttons