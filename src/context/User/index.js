import { useUserState, useUserActions } from './Provider'
import { ACTIONS } from './reducers'

const useUser = () => {
  const action = useUserActions()

  return {
    store: useUserState(),
    actions: {
      setUser: state => action({ type: ACTIONS.SET_USER, payload: state })
    }
  }
}

export default useUser
