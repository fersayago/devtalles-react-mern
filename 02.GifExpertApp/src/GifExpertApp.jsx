import { useState } from "react";

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Ciudad de Dios', 'Batman']);

  return (
    <>
      {/* Titulos */}
      <h1>GifExpertApp</h1>
      {/* Input */}
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