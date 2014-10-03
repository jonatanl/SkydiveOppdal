define(function (require) {
    var Base = require('./base'),
        settings = require('settings'),

        Invoice = Base.extend({
            idAttribute: 'invoice_id',
            
            url: function() {
                return this.get('customer').url() + '/invoices/' + this.id;
            }
        });
    
    return Invoice;
});