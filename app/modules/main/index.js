define(function(require, exports, module) {
    var Marionette = require('marionette');

    var indexModule = Marionette.Module.extend({
    	initialize: function() {
    		console.log('Main module');
    	}
    });
    
    return indexModule;
});