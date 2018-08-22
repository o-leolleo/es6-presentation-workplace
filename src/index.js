import _ from 'lodash';

function updateJavascript() {
	let element = document.getElementById('javascript');

	element.innerHTML = _.join(['ECMASCRIPT' , ' 6!'], ' ');
}

updateJavascript();
