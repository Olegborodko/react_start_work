import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Dashboard from './Dashboard.jsx';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/dashboard" component={Dashboard}/>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
