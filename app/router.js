define(function(require, exports, module) {
  "use strict";
  // External dependencies.
  var Backbone = require("backbone")
      Marionette = require('marionette');

  var Router = Backbone.Marionette.AppRouter.extend({
    routes : {
      '': 'index'
    },
    index: function() {
      console.log(route);
    }
  });

  return Router;
});
