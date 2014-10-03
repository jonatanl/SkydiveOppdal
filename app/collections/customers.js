define(function (require) {
    var Backbone = require('backbone'),
        Customer = require('models/customer');

    var customers = Backbone.Collection.extend({
        idAttribute: 'invoice_id',
        
        model: function(attrs, options) {
            return Customer.create(attrs, options);
        }
    });

    return customers;
});