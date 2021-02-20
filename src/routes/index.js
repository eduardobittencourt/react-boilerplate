import { useMemo } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import useUser from 'context/User'

import Public from './Public'
import Authenticated from './Authenticated'

const Routes = () => {
  const { store } = useUser()

  const renderRoute = useMemo(() => {
    if (!store?.id) {
      return <Public />
    }

    return <Authenticated />
  }, [store])

  return <Router>{renderRoute}</Router>
}

export default Routes
