import { useState,useEffect } from 'react'
import SearchBar from './components/SearchBar.jsx'
import conf from './conf/conf.js'
import ImageCard from './components/ImageCard.jsx'

function App() {
const [images, setImages] = useState([]);
const [loading, setLoading] = useState(true);
const [input, setInput] = useState('');
const [hits,setHits]=useState(0)

useEffect(() => {
   fetch(`https://pixabay.com/api/?key=${conf.pixabay_api_key}&q=${input}&image_type=photo&pretty=true`)
    .then(res=> res.json())
    .then(data =>{
      console.log(data);
      setImages(data.hits);
      setHits(data.totalHits);
      setLoading(false);
    })
    .catch(err => console.error('Error fetching data:', err))
}, [input])

  return (
    <div className="App">
      <SearchBar searchText={(text) => {setInput(text)}} placeholder="Search..." /> 
        {hits===0 ? <div className='flex justify-center'><div role="alert" className="alert alert-error alert-soft w-1/2 text-center flex       justify-center">
           <span>Error! type some valid input</span>
           </div></div> : !loading ? <div className='flex justify-center'><div role="alert" className="alert alert-success alert-soft w-1/2 text-center flex       justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>pictures found</div>
           </div> : <div className='flex justify-center'><div role="alert" className="alert alert-warning alert-soft w-1/2 text-center"></div>
           <span>No pictures found</span>
           </div> }
             
      <div className='flex justify-center'><hr className='my-4 border-t border-gray-300 h-0  w-3/4'></hr></div>
      {loading ? <h1 className='text-2xl font-bold text-center'>Loading...<span className="loading loading-spinner loading-xl"></span></h1> :<div className="flex justify-center align-items-center m-20 ml-32 mt-10 grid grid-cols-3 gap-4 ">
        {images.map((image) => {
          return (<ImageCard key={image.id} image={image} />)
        })}
      </div>}
    </div>
  )
//“I’m giving SearchBar a function called searchText.
//When SearchBar calls it, it should give me some text, and I’ll use that to update my state using setInput.”
}

export default App
