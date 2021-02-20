export const ACTIONS = {
    SET_USER: 'SET_USER'
}

export const REDUCERS = (state, action) => {
    switch (action.type) {
      case ACTIONS.SET_USER: {
        return action.payload
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
  }