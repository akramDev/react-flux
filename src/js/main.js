import React from 'react'
import ReactDOM from 'react-dom'
import AppView from './components/AppView.js'

var pages = [
  {name: 'welcome', title: 'Welcome', nav: true, auth: false, default: true},
  {name: 'flickr', title: 'flickr', nav: true, auth: false},
  {name: 'spells', title: 'Spells', nav: true, auth: true}
];

var route = 'welcome';

ReactDOM.render(<AppView pages={pages} route={route} />, document.getElementById('root'));
