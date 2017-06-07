//const home = require('../modules/home').default;
//const activityIndicator = require('../modules/indacitor').default;
//const button = require('../modules/button').default;
//const image = require('../modules/image').default;
//const progressbar = require('../modules/progressbar').default;
//const scrollview = require('../modules/scrollview').default;
//const mySwitch = require('../modules/switch').default;
//const textinput = require('../modules/textinput').default;
//const animated = require('../modules/animate').default;

export const noPage = {
  path: '*',
  onEnter: (nextState, replace) => replace('/home')
}

//export const homePage = createPageRoute('home', home);
export const homePage = {
  path: 'home',
  getComponent: (nextState, cb) => {
    require.ensure([], require => {
      const home = require('../modules/home').default;
      cb(null, home)
    }, 'home');
  }
}

export const activityIndicatorPage = {
  path: 'activity-indicator',
  getComponent: (nextState, cb) => {
    require.ensure([], require => {
      const activityIndicator = require('../modules/indacitor').default;
      cb(null, activityIndicator)
    }, 'activityIndicator')
  }
}

export const buttonPage = {
  path: 'button',
  getComponent: (nextState, cb) => {
    require.ensure([], require => {
      const button = require('../modules/button').default;
      cb(null, button)
    }, 'button')
  }
}

export const imagePage = {
  path: 'image',
  getComponent: (nextState, cb) => {
    require.ensure([], require => {
      const image = require('../modules/image').default;
      cb(null, image)
    }, 'image')
  }
}

export const progressPage = {
  path: 'progress',
  getComponent: (nextState, cb) => {
    require.ensure([], require => {
      const progressbar = require('../modules/progressbar').default;
      cb(null, progressbar)
    }, 'progress')
  }
}

export const scrollviewPage = {
  path: 'scrollview',
  getComponent: (nextState, cb) => {
    require.ensure([], require => {
      const scrollview = require('../modules/scrollview').default;
      cb(null, scrollview)
    }, 'scrollview')
  }
}

export const switchPage = {
  path: 'switch',
  getComponent: (nextState, cb) => {
    require.ensure([], require => {
      const mySwitch = require('../modules/switch').default;
      cb(null, mySwitch)
    }, 'switch')
  }
}

export const inputPage = {
  path: 'text-input',
  getComponent: (nextState, cb) => {
    require.ensure([], require => {
      const textinput = require('../modules/textinput').default;
      cb(null, textinput)
    }, 'text-input')
  }
}

export const animatedPage = {
  path: 'animated',
  getComponent: (nextState, cb) => {
    require.ensure([], require => {
      const animated = require('../modules/animate').default;
      cb(null, animated)
    }, 'animated')
  }
}
