define(function(require, exports, module) {
    require('initializers/model-relations');
    var Marionette = require('marionette'),
    	Backbone = require('backbone'),
    	loadView = require('./load'),
        Planes = require('collections/planes');

    var loadModule = Marionette.Module.extend({
    	initialize: function() {
    		console.log('Load module');       
    	}
    });

    var planes = new Planes();
    planes.fetch().then(function(test) {
        var view = new collectionView({collection: planes});
        view.render();
    });

    var collectionView = Marionette.CollectionView.extend({
        el: '#main',
        childView: loadView
    });
    return loadModule;
});