
const todoReducer = ( initialState = [], action ) => {
  switch( action.type ){
    case '[TODO] Add Todo':
      return [
        ...initialState,
        action.payload
      ];
    case 'BCD':
      throw new Error('Action.type BCD no esta implementada')
    default:
      return initialState;
  }
}

export default todoReducer