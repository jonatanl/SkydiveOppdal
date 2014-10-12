define(function(require, exports, module) {
    var Marionette = require('marionette'),
    	Backbone = require('backbone'),
    	template = require('tpl!./loadsOverview'),
        Planes = require('collections/planes');

    template = template();
   	var ItemView = Backbone.Marionette.ItemView.extend({
    	template: template
    });

    return ItemView;
});