import React from 'react'


const Buttons = ({setInputVal, fetchImages, handleText}) => {
    const handleButton = async (selection) => {
      await setInputVal(selection)
       handleText()
       fetchImages();
    }

  return (
    <div className='m-3'>
        <button className='button' onClick={() => handleButton('Food')}>Food</button>
        <button className='button' onClick={() => handleButton('Cars')}>Cars</button>
        <button className='button btn' onClick={() => handleButton('Beaches')}>Beaches</button>
        <button className='button btn' onClick={() => handleButton('Sports')}>Sports</button>
    </div>
  )
}

export default Buttons