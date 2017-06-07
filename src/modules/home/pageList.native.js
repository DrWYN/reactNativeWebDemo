import Util from '../../util';

const home = require('../home').default;
const activityIndicator = require('../indacitor').default;
const button = require('../button').default;
const image = require('../image').default;
const progressbar = require('../progressbar').default;
const scrollview = require('../scrollview').default;
const mySwitch = require('../switch').default;
const textinput = require('../textinput').default;
const animated = require('../animate').default;

export const pageList = [
  {name: 'home', path: '/home', component: home},
  {name: 'activityIndicator', path: '/activity-indicator', component: activityIndicator},
  {name: 'button', path: '/button', component: button},
  {name: 'image', path: '/image', component: image},
  {name: 'progress', path: '/progress', component: progressbar},
  {name: 'scrollview', path: '/scrollview', component: scrollview},
  {name: 'switch', path: '/switch', component: mySwitch},
  {name: 'textInput', path: '/text-input', component: textinput},
  {name: 'animated', path: '/animated', component: animated},
];

export const pressPage = function(item, navigator) {
  const {name, component} = item;
  Util.openNewPage(navigator, name, component);
}
