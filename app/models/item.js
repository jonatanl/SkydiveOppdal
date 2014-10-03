define(function (require) {
    var Base = require('./base'),
        settings = require('settings'),

        Item = Base.extend({
            idAttribute: 'item_id',
            
            url: function() {
                var id = (this.id === null ? '' : this.id);
                return settings.apiUrl + '/items/' + id;
            }
        });

    return Item;
});