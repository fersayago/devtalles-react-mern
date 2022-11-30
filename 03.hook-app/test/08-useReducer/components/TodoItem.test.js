import { fireEvent, render, screen } from '@testing-library/react'
import TodoItem from './../../../src/08-useReducer/components/TodoItem'

describe('Pruebas en <TodoItem />', () => {

  const Todo = {
    id: 1,
    description: 'Piedra del alma',
    done: false
  }

  const onDeleteTodoMock = jest.fn()
  const onToggleTodoMock = jest.fn()

  // en cada una de las pruebas se van a resetear mis funciones y va a aparecer como si estuviesen recien creadas
  beforeEach( () => jest.clearAllMocks() )

  test('debe de mostrar el TODO pendiente de completar', () => {

  render(
    <TodoItem
      todo={Todo}
      onToggleTodo={onToggleTodoMock}
      onDeleteTodo={onDeleteTodoMock}
    />
  )

  // revisamos que las clases del Todo sean correctas
  const liElement = screen.getByRole( 'listitem' );
  expect( liElement.className ).toBe( 'list-group-item d-flex justify-content-between' )

  const spanElement = screen.getByLabelText('span')
  expect( spanElement.className ).toContain('align-self-center')

  })

  test('debe de mostrar el TODO completado', () => {

  Todo.done = true;

  render(
    <TodoItem
      todo={Todo}
      onToggleTodo={onToggleTodoMock}
      onDeleteTodo={onDeleteTodoMock}
    />
  )

  const spanElement = screen.getByLabelText('span')
  expect( spanElement.className ).toContain('text-decoration-line-through')
  })

  test('debe de llamar el ToggleTodo cuando se hace click', () => {

  render(
    <TodoItem
      todo={Todo}
      onToggleTodo={onToggleTodoMock}
      onDeleteTodo={onDeleteTodoMock}
    />
  )

  const spanElement = screen.getByLabelText('span')
  fireEvent.click( spanElement )

  expect( onToggleTodoMock ).toHaveBeenCalledWith( Todo.id )
  })

  test('debe de llamar el deleteTodo cuando se hace click', () => {

    render(
      <TodoItem
        todo={Todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    )
  
    const deleteButton = screen.getByRole('button', { name: 'Borrar' })
    fireEvent.click( deleteButton )
  
    expect( onDeleteTodoMock ).toHaveBeenCalledWith( Todo.id )
    })
})