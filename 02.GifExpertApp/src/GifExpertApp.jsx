import { useState } from "react";
import { AddCategory, GifGrid } from "./components"

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Action']);

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