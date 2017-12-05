Ext.define('SmartCom.store.Customers', {
    extend: 'Ext.data.Store',
    model: 'SmartCom.model.Customer',
    autoLoad: true, 
    proxy: {
        type: 'ajax',
        api: {
            read: 'Scrips/app/data/customers.json'     //!!!!!!!!!!!!!!!     
        },
        reader: {
            type: 'json',
            successProperty: 'success'
        }
    }  
});