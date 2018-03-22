Ext.define('SmartCom.store.Items', {
    extend: 'Ext.data.Store',
    model: 'SmartCom.model.Item',
    autoLoad: true,
    //data: [
    //    { Id: '1', Code: '01', Name: 'box', Price: '12', Category: 'Auto' },
    //    { Id: '2', Code: '02', Name: 'Asus', Price: '123', Category: 'Comp' }
    //]

    proxy: {
        type: 'ajax',
        api: {
            read: '/Item/GetList'     //!!!!!!!!!!!!!!!     
        },
        reader: {
            type: 'json',
            successProperty: 'success'
        }
    }
});