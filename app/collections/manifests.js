define(function (require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        Manifest = require('models/manifest'),
        settings = require('settings');

    var manifests = Backbone.Collection.extend({

        model: function(attributes, options) {
            return Manifest.create(attributes, options);
        },

        url: function() {
            return this.plane() + '/manifests'
        }
    });

    return manifests;
});