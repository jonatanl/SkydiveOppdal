define(function(require, exports, module) {
  "use strict";

  var Backbone = require("backbone"),
      Marionette = require('marionette'),
      App = require('app');

  var router = Backbone.Marionette.AppRouter.extend({
    routes : {
      '': 'load'
    },

    load: function() {
      var loadModule = require('modules/load/load');
      App.module('loadModule', loadModule);
    }
  });

  return router;
});
