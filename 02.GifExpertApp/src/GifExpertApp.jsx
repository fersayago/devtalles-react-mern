import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Ciudad de Dios', 'Batman']);

  const onAddCategory = (newCategory) => {
    !categories.includes(newCategory)&&
    setCategories(state => [ newCategory, ...state ])
  }

  return (
    <>

      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={ onAddCategory }
      />


      <ol>
        {
          categories.map((category) => (
            <GifGrid
              key={ category }
              category={ category }
            />
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp