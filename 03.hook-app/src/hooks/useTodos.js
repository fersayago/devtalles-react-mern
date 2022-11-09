import { useReducer, useEffect } from "react";
import todoReducer from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

const useTodos = (initialState = []) => {

  const [todos, dispatchTodo] = useReducer( todoReducer, initialState, init )

  useEffect(() => {
    // no se importa ya que es una API que ya viene nativa de Javascript
    localStorage.setItem(
      'todos',
      JSON.stringify( todos ) || []
      );
  }, [todos])

  const handleNewTodo = ( todo ) => {
    
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }
    // el dispatch es la funcion que utilizamos para enviar la acción
    dispatchTodo( action );
  }

  const handleDeleteTodo = ( todoId ) => {
    const action = {
      type: '[TODO] Delete Todo',
      payload: todoId
    }
    dispatchTodo( action );
  }

  const handleToggleTodo = (todoId) => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: todoId
    }
    dispatchTodo(action);
  }

  
  return {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo
  }
}

export default useTodos;