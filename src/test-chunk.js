
import * as module from './components/test-chunk-component/test-chunk-component' ;


$(document).ready(() => {
	module.testChunk();
});

/*
import(/!* webpackPreload: true *!/'../../components/test-chunk-component/test-chunk-component')
	.then((module) => {
		console.log(module);
		module.testChunk();
	}
);*/

console.log('testChunk loaded');

