import { Router, Route } from "@solidjs/router";

import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <Router
      root={(props) => (
        <div class="main-content">{props.children}</div>
      )}
      >
      <Route path="/" component={Home} />
    </Router>
  );
};

export default App;
