import { FC } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { get as getCookie } from 'js-cookie'

import { Navbar, Footer } from './components/index'
import { Home } from './pages'

const App: FC = () => {
  const isLoggedIn = getCookie('access_token')
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          { !isLoggedIn ? (
            <>
              <Route exact path="/" component={Home} />
              <Redirect to="/" />
            </>
          ) : null }
        </Switch>
      </Router>
      <Footer />
    </>
  )
};

export default App;
