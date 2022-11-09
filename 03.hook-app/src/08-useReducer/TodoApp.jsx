import { useEffect } from 'react'
import { useReducer } from 'react'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import todoReducer from './todoReducer'

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Recolectar la piedra del alma',
  //   done: false
  // }
]

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {

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
  
  return (
    <>
      <h1>Todo App: 10, <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>

    </>
  )
}

export default TodoApp