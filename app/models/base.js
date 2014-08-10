define(function(require) {
    var Supermodel = require('backbone.supermodel'),
        _ = require('underscore'),
        BaseModel = Supermodel.Model.extend({});

    _.extend(BaseModel.prototype, {
        initialize: function() {
            Supermodel.Model.prototype.initialize.apply(this, arguments);
        }
    });

    return BaseModel;
});