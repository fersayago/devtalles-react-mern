
const todoReducer = ( initialState = [], action ) => {
  switch( action.type ){
    case '[TODO] Add Todo':
      return [
        ...initialState,
        action.payload
      ];
    case '[TODO] Delete Todo':
      // filtramos para devolver un arreglo que devuelvat todos los todos salvo el que coincida con el id que mandamos como payload

      return initialState.filter( todo => todo.id !== action.payload );
    case '[TODO] Toggle Todo':
      return initialState.map(todo => {
        if (todo.id === action.payload){
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo
      })
    case 'BCD':
      throw new Error('Action.type BCD no esta implementada')
    default:
      return initialState;
  }
}

export default todoReducer