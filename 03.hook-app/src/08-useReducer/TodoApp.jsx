import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import { useTodos } from '../hooks'

const TodoApp = () => {

  const {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    todosCount,
    pendingTodosCount
  } = useTodos();

  return (
    <>
      <h1>Todo App: {todosCount}, <small>pendientes: { pendingTodosCount }</small></h1>
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