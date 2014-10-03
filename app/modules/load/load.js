define(function(require, exports, module) {
    var Marionette = require('marionette'),
    	Backbone = require('backbone'),
    	template = require('tpl!./load');

    var loadModule = Marionette.Module.extend({
    	initialize: function() {
    		console.log('Load module');            
    	}
    });


    var Message = Backbone.Model.extend(); 
    var message = new Message({
        title: "Title",
        description: "Description"
    });

    template = template({message: message})
   	var ItemView = Backbone.Marionette.ItemView.extend({
        el: '#main',
    	template: template
    });

    var view = new ItemView();
    view.render();

    return loadModule;
});