import TodoItem from './TodoItem'

const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <ul className='list-group'>
        {
          todos.map(todo => {
            return (
              <TodoItem
                todo={todo}
                key={todo.id}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
              />
            )
          })
        }
      </ul>
    </>
  )
}

export default TodoList