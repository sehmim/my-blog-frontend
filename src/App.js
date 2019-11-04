import React from 'react';
import './App.css';
import BlogPage from './pages/BlogPage';
import BlogViewPage from "../src/pages/BlogViewPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Form from './components/Form';
import LandingPage from './pages/LandingPage';

function App() {
  // let match = useRouteMatch();
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>

            <Route exact path="/">
              <LandingPage />
            </Route>

            <Route exact path="/blogs">
              <BlogPage />
            </Route>

            <Route path={`/blogs/:id`} component={BlogViewPage} ></Route>
            <Route path={`/post`} component={Form} ></Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
