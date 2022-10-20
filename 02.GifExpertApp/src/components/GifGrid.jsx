import { useEffect, useState } from 'react'
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

      <ul>
        {
          images.map(({ id, title }) => (
            <li key={id}>
              <p>{ title }</p>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default GifGrid