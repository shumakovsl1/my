Ext.define('SmartCom.store.Orders', {
    extend: 'Ext.data.Store',
    model: 'SmartCom.model.Order',
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
    },

    filterOrdersByStatus: function (status) {
        this.clearFilter();
        this.filter([{
            property: 'Status',
            value: status
        }]);
    },
    refresh: function () {
        this.clearFilter();
    }
});