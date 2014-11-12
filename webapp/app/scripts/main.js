console.log('\'Allo \'Allo!');

$(document).on('ready', function() {
	'use strict';
	console.log('meep meep');

	var items = ['green', 'yellow', 'blue'];
	for (var i = 0; i < items; i++) {
		if(items[i] === 'green') {
			console.log(items[i]);
		}
	}

	var colors = _.filter(items, function(item) {
		return item === 'green';
	})
	console.log(colors);


})

