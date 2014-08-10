define(['require', './plane'], 
	function(require) {
		var Base = require('./base'),
		Manifest = Base.extend({
			idAttribute: 'manifest_id',
			url: function() {
				return this.plane().url() + '/manifests/' + this.id;
			}
		});

		return Manifest;
	}
);