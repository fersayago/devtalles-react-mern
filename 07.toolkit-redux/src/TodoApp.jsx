import { useState } from "react"
import { useGetTodosQuery, useGetTodoQuery } from "./store/apis/todosApi"

export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1)

  // const { data: todos = [], isLoading } = useGetTodosQuery()
  const { data: todo, isLoading } = useGetTodoQuery( todoId )

  const previousTodo = () => {
    setTodoId(todoId - 1)
    console.log(todoId);
  }

  const nextTodo = () => {
    setTodoId(todoId + 1)
  }

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>Loading: {isLoading ? 'True': 'False'}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <button
        onClick={previousTodo}
        disabled={todoId <= 1}
      >
        ←
      </button>
      <button onClick={nextTodo}>
        →
      </button>

      {/* <ul>
        {
          todos.map((todo) => {
            return (
              <li key={todo.id}>
                <strong> {todo.completed ? 'DONE' : 'Pending'} </strong>
                {todo.title}
              </li>
            )
          })
        }
      </ul> */}
    </>
  )
}