Ext.define('SmartCom.controller.CustomerController', {
    extend: 'Ext.app.Controller',
    init: function () {
        console.log('Itroooooolloereoelelel');
    },
    config: {
        stores: ['Customers'],
        models: ['Customer'],
        views: ['customer.List'],
    }
});