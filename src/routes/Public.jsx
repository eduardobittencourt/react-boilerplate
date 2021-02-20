import { Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'

const Public = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default Public
