import _ from 'lodash';
import { helloWorld } from './common';

function updateJavascript() {
	let element = document.getElementById('javascript');
	const { name, ...rest } = { name: 'José', lastName: 'Penha'};

	helloWorld();
	element.innerHTML = _.join(['ECMASCRIPT' , ' 6!'], ' ');
}

updateJavascript();
