import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useParams, Switch, useRouteMatch } from 'react-router-dom'
import Screen1 from './Screen1'
import Screen2 from './About'

function App(props) {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route exact path="/" element={<Screen1 />} />
        <Route exact path="/about" element={<Screen2 />} />

      </Routes>
    </Router>
  );
}

export default App;

