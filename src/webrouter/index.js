import React, {Component} from 'react';
import {Router, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';

import App from '../modules/app';

import {
  homePage,
  activityIndicatorPage,
  buttonPage,
  imagePage,
  progressPage,
  scrollviewPage,
  switchPage,
  inputPage,
  animatedPage,
  noPage
} from './router.js';

const routers = {
  path: '/',
  component: App,
  onEnter: (nextState, replace, callback) => {
    callback();
  },
  onLeave: (preState) => {
    
  },
  onChange: (preState, nextState, replace, callback) => {
    callback();
  },
  getIndexRoute: (nextState, cb) => {
    require.ensure([], require => {
      cb(null, homePage)
    }, 'indexRoute')
  },
  getChildRoutes: (nextState, cb) => {
   require.ensure([], require => {
      cb(null, [
        homePage,
        activityIndicatorPage,
        buttonPage,
        imagePage,
        progressPage,
        scrollviewPage,
        switchPage,
        inputPage,
        animatedPage,
        noPage
      ])
   }, 'dynamicRoutes') 
  },
}

const history = useRouterHistory(createHashHistory)({queryKey: false});

export default class extends Component {
  render() {
    return (
      <Router history={history} routes={routers}></Router>
    );
  }
}
