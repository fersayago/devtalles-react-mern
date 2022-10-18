import { useState } from "react";

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Ciudad de Dios', 'Batman']);

  const onAddCategory = (category) => {
    setCategories(state => [ ...state, category])
  }

  return (
    <>
      {/* Titulos */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <button onClick={() => {onAddCategory("valorant")}}>add</button>
      {/* Listado de Gif */}
      <ol>
        {
          categories.map((category) => {
            return <li key={ category }>{category}</li>
          })
        }
      </ol>
        {/* Gif Item */}
    </>
  )
}

export default GifExpertApp