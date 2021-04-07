const initialState = {
  selectedObject: null
}

const object = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_OBJECT': {
      return {
        ...state,
        selectedObject: action.payload
      }
    }
    default:
      return state
  }
}

export default object