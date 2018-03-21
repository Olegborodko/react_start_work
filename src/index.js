import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.scss';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from './routes/App.jsx';
import Dashboard from './routes/Dashboard.jsx';

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
