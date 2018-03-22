Ext.define('SmartCom.controller.ItemController', {
    extend: 'Ext.app.Controller',
    init: function () {
        console.log('ItemControllerCreated');
    },
    
        stores: ['Items'],
        models: ['Item'],
        views: ['item.List']
    
});