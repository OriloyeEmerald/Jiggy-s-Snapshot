import { useState } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import Buttons from './components/Buttons';
import axios from 'axios';
import { HourglassMedium } from 'phosphor-react';

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "b87h6-gJSq2RAvx6axWqbNb_MdB9XHbF_n7h4s1EZRE";
const IMAGES_PER_PAGE = 20;

function App() {

  const [inputVal, setInputVal] = useState("");
  const [images, setImages] = useState([]);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const fetchImages = async () => {
    try {
      setIsLoading(true)
      const {data} = await axios.get(`${API_URL}?query=${inputVal}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`);
      setIsLoading(false)
      setImages(data.results)

    } catch (error) {
      console.log(error);
    } 
}

   const handleText = () => {
     setText(inputVal)
   }

  return (
    <>
      <div className='font-myFonts'>
       <h1 className='h1'>Jiggy's SnapShot</h1>
         <Searchbar inputVal={inputVal} setInputVal={setInputVal} fetchImages={fetchImages} handleText={handleText}/>
         <Buttons setInputVal={setInputVal} fetchImages={fetchImages} images={images} setImages={setImages} handleText={handleText}/>
         
         {isLoading ? <h1 >Getting images... <HourglassMedium size={50} className='loader'/>  </h1> : <h2 className='h2'>{text} </h2>}
       <div className='div-img'>
        {images.map((image) => {
            return (
              <img 
               key={image.id} 
               src={image.urls.small} 
               alt={image.alt_description} 
               className='img'/>
              
            )
         })}
        </div>
       
      </div>
      
    </>
  )
}

export default App
