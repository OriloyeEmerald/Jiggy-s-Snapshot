import { useState } from 'react'
import './App.css'
import Searchbar from './components/Searchbar'
import Buttons from './components/Buttons'
import axios from 'axios'


const API_URL = "https://api.unsplash.com/search/photos"
const API_KEY = "b87h6-gJSq2RAvx6axWqbNb_MdB9XHbF_n7h4s1EZRE"
const IMAGES_PER_PAGE = 20;
function App() {

  const [inputVal, setInputVal] = useState("")
  const [images, setImages] = useState([])

  const fetchImages = async () => {
    try {
      const {data} = await axios.get(`${API_URL}?query=${inputVal}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`);
      setImages(data.results)
    } catch (error) {
      console.log(error);
    } 
}

  return (
    <>
      <div className='font-myFonts'>
       <h1 className='text-4xl text-white mb-2 font-fontz mt-2 text-gray-300'>Jiggy's SnapShot</h1>
         <Searchbar inputVal={inputVal} setInputVal={setInputVal} fetchImages={fetchImages}/>
         <Buttons setInputVal={setInputVal} fetchImages={fetchImages} images={images} setImages={setImages}/>
         
      <div className='flex justify-center flex-wrap mt-4'>
        {images.map((image) => {
            return (
              <img src={image.urls.small} className='rounded-lg w-50 h-40 gap-2 object-cover mb-4'/>
              
            )
         })}
        </div>
       
      </div>
      
    </>
  )
}

export default App
