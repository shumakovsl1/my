Ext.define('SmartCom.store.OrderItems', {
    extend: 'Ext.data.Store',
    model: 'SmartCom.model.OrderItem',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/users.json'     //!!!!!!!!!!!!!!!     
        },
        reader: {
            type: 'json',
            successProperty: 'success'
        }
    }
});