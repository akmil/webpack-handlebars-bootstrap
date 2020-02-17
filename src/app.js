import 'regenerator-runtime/runtime';

import 'bootstrap';
import './assets/styles/main.scss';

// import * as header from  './components/header/header';
// import * as burgerMenu from './components/header/burger-menu/burger-menu';
//
// console.log('app.js loaded');
//
// $(document).ready(() => {
//   //console.log('jquery works!');
//  header.init();
//  burgerMenu.init();
// });

// Main javascript entry point

import basicLib from './services/modules/basicModules';
import dynamicModuleLoader from './services/dynamic-module-loader';


// const window.$ = $ || {};

dynamicModuleLoader(basicLib);
