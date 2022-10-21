import { useEffect, useState } from 'react'
import fetchGifs from '../api/fetchGifs'

const useFetchGifs = ( category ) => {
  
  const [images, setImages ] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    const newImages = await fetchGifs( category );
    setImages( newImages );
    setIsLoading(false);
  }

  // ! useEffect no puede devolver una promesa
  useEffect(() => {
    getImages();
  },[])

  return {
    images,
    isLoading,
  }
}

export default useFetchGifs