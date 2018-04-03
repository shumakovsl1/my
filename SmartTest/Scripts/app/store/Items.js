Ext.define('SmartCom.store.Items', {
    extend: 'Ext.data.Store',
    model: 'SmartCom.model.Item',
    autoLoad: true,
    //data: [
    //    { id: '1', code: '01', name: 'box', price: '12', category: 'Auto' },
    //    { id: '2', code: '02', name: 'Asus', price: '123', category: 'Comp' }
    //]

    proxy: {
        type: 'ajax',
        api: {
            read: 'Item/GetList',
            create:'Item/Create',
            update: 'Item/Update',
            destroy: 'Item/Delete'
        },
        reader: {
            type: 'json',  
            root: 'data'
        }
    }
});