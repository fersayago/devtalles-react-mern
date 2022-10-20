import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Ciudad de Dios', 'Batman']);

  const onAddCategory = (newCategory) => {
    // if (categories.includes(newCategory)) return
    !categories.includes(newCategory)&&
    setCategories(state => [ newCategory, ...state ])
  }

  return (
    <>

      <h1>GifExpertApp</h1>
      <AddCategory
        //setCategories={ setCategories }
        onNewCategory={ onAddCategory }
      />


      <ol>
        {
          categories.map((category) => {
            return <li key={ category }>{ category }</li>
          })
        }
      </ol>
    </>
  )
}

export default GifExpertApp