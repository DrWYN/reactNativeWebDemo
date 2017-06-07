import Util from '../../util';

export const pageList = [
  {name: 'home', path: '/home', component: null},
  {name: 'activityIndicator', path: '/activity-indicator', component: null},
  {name: 'button', path: '/button', component: null},
  {name: 'image', path: '/image', component: null},
  {name: 'progress', path: '/progress', component: null},
  {name: 'scrollview', path: '/scrollview', component: null},
  {name: 'switch', path: '/switch', component: null},
  {name: 'textInput', path: '/text-input', component: null},
  {name: 'animated', path: '/animated', component: null},
];

export const pressPage = function(item) {
  const {path} = item;
  Util.openNewPage(path);
} 
