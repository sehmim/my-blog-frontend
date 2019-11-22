import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import BlogPage from './pages/BlogPage';
import BlogViewPage from "../src/pages/BlogViewPage";
import Form from './components/Form';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>

            <Route exact path="/">
              <LandingPage />
            </Route>

            <Route path="/blogs">
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
