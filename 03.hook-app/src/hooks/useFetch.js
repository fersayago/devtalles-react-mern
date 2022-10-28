import { useEffect, useState } from "react";

const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })
  
  const getFetch = async () =>{

    setState({
      ...state,
      isLoading: true
    })

    const resp = await fetch(url);
    const data = await resp.json();
    setState({
      data, // es igual a data: data
      isLoading: false,
      hasError: null,
    })
  }

  useEffect(() => {
    getFetch();
  }, [url])
  
  // return state
  // podemos retornar el state pero de la siguiente manera tenemos mas a mano la información de que estamos retornando
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}

export default useFetch