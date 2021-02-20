import { ACTIONS } from './reducers'

const actionsList = () => ({
  setUser: (state, dispatch) =>
    dispatch({ type: ACTIONS.SET_USER, payload: state })
})

export default actionsList
