import { Switch, Route, Redirect } from 'react-router-dom'

import Authenticated from 'pages/Authenticated'

const AuthenticatedRoutes = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Authenticated} />
      <Redirect to="/dashboard" />
    </Switch>
  )
}

export default AuthenticatedRoutes
