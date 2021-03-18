import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Navbar, Footer } from "./components/index";
import { Home, SignIn, SignUp, Panel } from "./pages";
import { useStore } from "./store";

const App: FC = () => {
  const username = useStore((state) => state.username);
  return (
    <Router>
      <Navbar />
      <Switch>
        {!username ? (
          <>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Redirect to="/" />
          </>
        ) : (
          <>
            <Route path="/panel" component={Panel} />
            <Redirect to="/panel" />
          </>
        )}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
