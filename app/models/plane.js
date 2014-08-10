define(function (require, exports, module) {
	var Base = require('./base'),
		settings = require('settings');

		Plane = Base.extend({
			idAttribute: 'plane_id',
			url: function() {
				return settings.apiUrl + '/planes/' + this.id;
			}
		});

	return Plane;
});