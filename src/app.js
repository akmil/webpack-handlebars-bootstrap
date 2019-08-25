
import(/* webpackPreload: true */ 'bootstrap');
import(/* webpackPreload: true */ 'jquery');
import(/* webpackPreload: true */ './assets/styles/main.scss');

// import $ from "jquery";
// import 'bootstrap';
// import './assets/styles/main.scss';
// import * as header from  './components/header/header';

import * as burgerMenu from './components/header/burger-menu/burger-menu';

import(/* webpackPreload: true */'./components/header/header')
	.then((module) => {
		console.log(module);
		module.init();
		module.test();
	}
);

console.log('app.js loaded');

$(document).ready(() => {
	// header.init();
	burgerMenu.init();
});
