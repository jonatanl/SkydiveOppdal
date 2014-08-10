require.config({
	paths: {
		"underscore": "../bower_components/lodash/dist/lodash.underscore",
		"lodash": "../bower_components/lodash/dist/lodash",
		"template": "../bower_components/lodash-template-loader/loader",
		"jquery": "../bower_components/jquery/dist/jquery",
		"backbone": "../bower_components/backbone/backbone",
		"marionette": "../bower_components/marionette/lib/core/backbone.marionette",
		"backbone.wreqr" : "../bower_components/backbone.wreqr/lib/backbone.wreqr",
		"backbone.babysitter" : "../bower_components/backbone.babysitter/lib/backbone.babysitter",
		"backbone.supermodel" : "../bower_components/supermodel/supermodel"
	},

	shim: {
		"backbone" : {
			deps: ["jquery", "underscore"]
		},
		"marionette": {
			deps: ["backbone.wreqr", "backbone.babysitter"],
			exports: "marionette"
		},
		"backbone.supermodel" : {
			deps: ["backbone", "underscore"],
			exports: "Supermodel"
		}
	},

  deps: ["main"]
});
