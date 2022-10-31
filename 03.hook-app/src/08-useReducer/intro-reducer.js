const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del Alma',
  done: false,
}];

// recibe un estado y una acción
const todoReducer = ( state = initialState, action = {} ) => {

  if ( action.type === '[TODO] add todo' ){
    return [ ...state, action.payload ]
  }

  // siempre devuelve un estado modificado
  return state;
}

let todos = todoReducer();

// cuando queremos modificar un reducer debemos mandar una acción

const newTodo = {
  id: 2,
  todo: 'Recolectar la piedra del poder',
  done: false
}

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo, // no siempre se requiere un payload. en caso de eliminar no se recibe payload
}

todos = todoReducer( todos, addTodoAction );

console.log({estado: todos})