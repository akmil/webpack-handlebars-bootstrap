import $ from "jquery";
import 'bootstrap';
import './assets/styles/main.scss';

import * as header from  './components/header/header';
import * as burgerMenu from './components/header/burger-menu/burger-menu';

console.log('app.js loaded');

$(document).ready(() => {
  console.log('jquery works!');
	header.init();
	burgerMenu.init();
});
