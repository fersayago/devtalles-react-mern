import { useEffect, useState } from 'react'
import GifItem from './GifItem'
import fetchGifs from '../api/fetchGifs'

const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  // ! useEffect no puede devolver una promesa
  useEffect(() => {
    fetchGifs(category)
      .then(
        newImages => setImages(newImages)
      )
  },[])

  return (
    <>
      <h3>{ category }</h3>

      <div className='card-grid'>
        {
          images.map(( image ) => (
            <GifItem
              key={ image.id }
              // ! Spread del item image para recibirlo como propiedades
              { ...image }
            />
          ))
        }
      </div>
    </>
  )
}

export default GifGrid