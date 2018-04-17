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

import Login from './routes/Login';
import Dashboard from './routes/Dashboard.jsx';
import Page404 from './routes/Page404';
import Facebook from './routes/Facebook.jsx';
import Admin from './routes/Admin';

import MainLayout from './layouts/MainLayout';
import Null from './layouts/Null';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'; //-

//============state part
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

const history = createHistory();
const middleware = routerMiddleware(history);  //-
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, middleware)));

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
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" layout={Null} component={Login} />
      <Route exact path="/dashboard" layout={MainLayout} component={Dashboard} />
      <Route exact path="/facebook" layout={MainLayout} component={Facebook} />
      <Route exact path="/admin" layout={Null} component={Admin} />
      <Route layout={Null} component={Page404} />
    </Switch>
  </ConnectedRouter>
</Provider>,
document.getElementById('root')
);
registerServiceWorker();