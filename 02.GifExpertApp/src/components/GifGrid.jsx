import { useEffect } from 'react'
import fetchGifs from '../api/fetchGifs'

const GifGrid = ({ category }) => {

  useEffect(() => {
    fetchGifs(category)
  },[])

  return (
    <>
      <h3>{ category }</h3>
    </>
  )
}

export default GifGrid