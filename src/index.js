import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

import CMS from 'netlify-cms-app'
// Initialize the CMS object
CMS.init()
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate('my-template', MyTemplate)