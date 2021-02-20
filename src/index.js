import React from 'react'
import ReactDOM from 'react-dom'

import Routes from 'routes'
import Providers from 'context'

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Routes />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
)
