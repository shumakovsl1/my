Ext.define('SmartCom.view.customer.List', {
    extend: 'Ext.container.Container',
    layout: 'border',
    alias: 'widget.customerList',
    title: 'Все заказчики',
    items: [
        {xtype: 'gridpanel',
        region: 'center',
        store: 'Customers',
        initComponent: function () {
        this.columns = [
            { header: 'Id', dataIndex: 'id', flex: 1 },
            { header: 'Code', dataIndex: 'code', flex: 1 },
            { header: 'Name', dataIndex: 'name', flex: 1 },
            { header: 'Address', dataIndex: 'address', flex: 1 },
            { header: 'Discount', dataIndex: 'discount', flex: 1 },
            { header: 'UserId', dataIndex: 'userId', flex: 1 },
    
        ],
       
            this.callParent(arguments);
        }
       
    },
   // {xtype: 'panel',
   // region: 'west',
   // title: 'фильтрация',
   // collapsible: true,
//}
    ],
   
   
});