import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { get as getCookie } from "js-cookie";

import { Navbar, Footer } from "./components/index";
import { Home, SignIn, SignUp } from "./pages";

const App: FC = () => {
  const isLoggedIn = getCookie("access_token");
  return (
    <Router>
      <Navbar />
      <Switch>
        {!isLoggedIn ? (
          <>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Redirect to="/" />
          </>
        ) : null}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
