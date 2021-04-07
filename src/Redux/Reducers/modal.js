const initialState = {
  modalActive: false,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL_ACTIVE': {
      return {
        ...state,
        modalActive: action.payload
      }
    }
    default:
      return state
  }
}

export default modal