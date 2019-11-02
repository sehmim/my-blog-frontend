import React from 'react';
import './App.css';
import Landingpage from './pages/Landingpage';
import BlogViewPage from "../src/pages/BlogViewPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  // let match = useRouteMatch();
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>

            <Route exact path="/">
              <Landingpage />
            </Route>

            <Route path={`/blogs/:id`} component={BlogViewPage} ></Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
