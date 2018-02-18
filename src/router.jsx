import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import App from './App'

const routes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route
          path="/new/:str"
          render={({match}) => (<h1>New: {match.params.str}</h1>)}/>

        <Route path="/old/:str" render={({match}) => (
          <Redirect to={`/new/${match.params.str}`} />
        )} />
        {/*<Links />*/}


        {/*<Route path="/protected" render={() => (
        loggedin
          ? <h1>Welcome to the protected page</h1>
          : <Redirect to="/new/Login" />
      )} />*/}
      </Switch>
    </div>
  </Router>
)

export default routes
