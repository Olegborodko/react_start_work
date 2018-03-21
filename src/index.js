import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.scss';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import App from './routes/App.jsx';
import Dashboard from './routes/Dashboard.jsx';
import Page404 from './routes/Page404';

import MainLayout from './layouts/MainLayout';
import Null from './layouts/Null';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
);

ReactDOM.render(
  <Router>
    <Switch>
      <AppRoute exact path="/" layout={MainLayout} component={App} />
      <AppRoute exact path="/dashboard" layout={MainLayout} component={Dashboard} />
      <AppRoute layout={Null} component={Page404} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
