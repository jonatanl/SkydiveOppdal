define(function (require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        Plane = require('models/plane'),
        settings = require('settings');

    var planes = Backbone.Collection.extend({

        model: function(attributes, options) {
            return Plane.create(attributes, options);
        },

        url: function(models) {
            return settings.apiUrl + '/planes';
        },

        parse: function(response) {
            return response.planes;
        }
    });

    return planes;
});