import { Switch, Route } from 'react-router-dom'

import Authenticated from 'pages/Authenticated'

const AuthenticatedRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={Authenticated} />
    </Switch>
  )
}

export default AuthenticatedRoutes
