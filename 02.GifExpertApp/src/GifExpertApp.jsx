import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Ciudad de Dios', 'Batman']);

  const onAddCategory = (category) => {
    setCategories(state => [ ...state, category])
  }

  return (
    <>
    
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={ setCategories } />


      <ol>
        {
          categories.map((category) => {
            return <li key={ category }>{category}</li>
          })
        }
      </ol>
    </>
  )
}

export default GifExpertApp