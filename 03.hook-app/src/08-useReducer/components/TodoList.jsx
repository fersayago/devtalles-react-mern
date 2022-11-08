import TodoItem from './TodoItem'

const TodoList = ({ todos = [], onDeleteTodo }) => {
  return (
    <>
      <ul className='list-group'>
        {
          todos.map(todo => {
            return (
              <TodoItem todo={todo} key={todo.id} onDeleteTodo={onDeleteTodo}/>
            )
          })
        }
      </ul>
    </>
  )
}

export default TodoList