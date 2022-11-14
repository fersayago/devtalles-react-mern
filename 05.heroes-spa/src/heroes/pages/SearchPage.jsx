//import { HeroCard } from './'

import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'

import { useForm } from "../../hooks/useForm"
import { getHeroesByName } from "../helpers"
import { HeroCard } from "../components"

const SearchPage = () => {

  // para obtener la navegación
  const navigate = useNavigate()

  // para obtener la información de la ubicación donde nos encontramos
  const location = useLocation()

  // para manejar uno o varios parametros de la query
  const { q = '' } = queryString.parse( location.search )

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const {onInputChange, searchText } = useForm({
    searchText: q
  })

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    navigate(`?q=${ searchText }`)
  }
  
  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ handleSearchSubmit }>
            <input
              type="text"
              placeholder="search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
              />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {/* {
            (q === '')
            ? <div className="alert alert-primary">Search a hero</div>
            : (heroes.length === 0) &&
              <div className="alert alert-danger">No hero with <b>{ q }</b></div>
            
          } */}
          <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none'}}>
          Search a hero
          </div>
          <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
            No hero with <b>{ q }</b>
          </div>
          {
            heroes.map( hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default SearchPage