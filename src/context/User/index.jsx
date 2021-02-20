import { createContext, useContext, useReducer } from 'react'

import { REDUCERS } from './reducers'
import userActions from './actions'

const UserStateContext = createContext()
const UserActionsContext = createContext()

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(REDUCERS, null)

  return (
    <UserStateContext.Provider value={state}>
      <UserActionsContext.Provider value={dispatch}>
        {children}
      </UserActionsContext.Provider>
    </UserStateContext.Provider>
  )
}

const useUserState = () => {
  const context = useContext(UserStateContext)

  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider')
  }

  return context
}

const useUserDispatch = () => {
  const context = useContext(UserActionsContext)

  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider')
  }

  return context
}

const useUser = () => ({ store: useUserState(), control: useUserDispatch() })

export {UserProvider, useUser, userActions}