import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.scss';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  HashRouter,
  BrowserRouter
} from 'react-router-dom';

import App from './routes/App.jsx';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard.jsx';
import Page404 from './routes/Page404';
import Facebook from './routes/Facebook.jsx';

import MainLayout from './layouts/MainLayout';
import Null from './layouts/Null';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//============state part
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

//temp
//window.store = store;
//console.log(window.store.getState())

//===========layouts part
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
);

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <Router>
    <Switch>
      <Route exact path="/" layout={Null} component={Login} />
      <Route exact path="/dashboard" layout={MainLayout} component={Dashboard} />
      <Route exact path="/facebook" layout={MainLayout} component={Facebook} />
      <Route layout={Null} component={Page404} />
    </Switch>
    </Router>
  </BrowserRouter>
</Provider>,
document.getElementById('root')
);
registerServiceWorker();