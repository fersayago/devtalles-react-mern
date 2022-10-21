import GifItem from './GifItem'
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

  const { images, isLoading} = useFetchGifs( category );

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