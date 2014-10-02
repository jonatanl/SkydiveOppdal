define(function(require, exports, module) {
    var Marionette = require('marionette'),
    	Backbone = require('backbone'),
    	template = require('tpl!./load');

    var loadModule = Marionette.Module.extend({
    	initialize: function() {
    		console.log('Load module');
    	}
    });

    template = '<div><%= message %></div>'
   	var ItemView = Backbone.Marionette.ItemView.extend({   	
   		region: '#main',
    	template: template,
    	model: {message: 'test'}
    });

    var view = new ItemView();
    view.render();

    return loadModule;
});