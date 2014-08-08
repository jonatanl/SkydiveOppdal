define(function(require, exports, module) {
  // The root path to run the application through.
  exports.root = "/";

   var _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        settings = require('settings');

    var Application = new Marionette.Application();

    Application.settings = settings;

    // Start Backbone.history after all initializers are done.
    Application.on('initialize:after', function(options) {
        if (Backbone.history) {
            Backbone.history.start({
                pushState: false,
                root: settings.appRoot
            });
        }
    });

    return Application;
});
