
const todoReducer = ( initialState = [], action ) => {
  switch( action.type ){
    case 'ABC':
      return initialState;
    case 'BCD':
      throw new Error('Action.type BCD no esta implementada')
    default:
      return initialState;
  }
}

export default todoReducer