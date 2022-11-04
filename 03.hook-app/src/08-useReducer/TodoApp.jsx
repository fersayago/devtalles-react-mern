import { useReducer } from 'react'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import todoReducer from './todoReducer'

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del poder',
    done: false
  }
]

const TodoApp = () => {

  const [todos, dispatchTodo] = useReducer( todoReducer, initialState )

  const handleNewTodo = ( todo ) => {
    
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    // el dispatch es la funcion que utilizamos para enviar la acción
    dispatchTodo( action );
  }
  
  return (
    <>
      <h1>Todo App: 10, <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
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