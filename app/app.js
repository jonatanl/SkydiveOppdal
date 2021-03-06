define(function(require, exports, module) {
  exports.root = "/";
  require('initializers/model-relations');

   var  Backbone = require('backbone'),
        Marionette = require('marionette'),
        settings = require('settings');

    var Application = new Marionette.Application();
    Application.settings = settings;

    // Start Backbone.history after all initializers are done.
    Application.on('start', function(options) {
        if (Backbone.history) {
            Backbone.history.start({
                pushState: false,
                root: settings.appRoot
            });
        }
    });

    return Application;
});
