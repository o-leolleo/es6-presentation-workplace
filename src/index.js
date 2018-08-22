import _ from 'lodash';

function updateJavascript() {
	let element = document.getElementById('javascript');
	const { name, ...rest } = { name: 'José', lastName: 'Penha'};

	console.log(name, rest);

	element.innerHTML = _.join(['ECMASCRIPT' , ' 6!'], ' ');
}

updateJavascript();
