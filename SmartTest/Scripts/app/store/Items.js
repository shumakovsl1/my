Ext.define('SmartCom.store.Items', {
    extend: 'Ext.data.Store',
    model: 'SmartCom.model.Item',
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