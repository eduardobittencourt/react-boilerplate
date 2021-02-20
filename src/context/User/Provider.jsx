import { createContext, useContext, useReducer } from 'react'

import { STATE, REDUCERS } from './reducers'

const UserStateContext = createContext()
const UserActionsContext = createContext()

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(REDUCERS, STATE)

  return (
    <UserStateContext.Provider value={state}>
      <UserActionsContext.Provider value={dispatch}>
        {children}
      </UserActionsContext.Provider>
    </UserStateContext.Provider>
  )
}

export const useUserState = () => {
  const context = useContext(UserStateContext)

  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider')
  }

  return context
}

export const useUserActions = () => {
  const context = useContext(UserActionsContext)

  if (context === undefined) {
    throw new Error('useUserActions must be used within a UserProvider')
  }

  return context
}

export default UserProvider
