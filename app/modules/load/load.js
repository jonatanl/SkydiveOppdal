define(function(require, exports, module) {
    var Marionette = require('marionette'),
    	Backbone = require('backbone');

    var loadModule = Marionette.Module.extend({
    	initialize: function() {
    		console.log('Load module');
    	}
    });

    return loadModule;
});