import { getHeroesByPublisher } from './../helpers'
import { HeroCard } from './'

const HeroList = ({ publisher }) => {

  const heroes = getHeroesByPublisher( publisher )

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {
        heroes.map(hero => (
          // al enviar el objeto hero desestructurado mediante prop lo podemos recibir de la misma manera sin especificar el objeto con las props
          <HeroCard
            key={hero.id}
            { ...hero }
          />
        ))
      }
    </div>
  )
}

export default HeroList