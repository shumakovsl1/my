Ext.define('SmartCom.view.item.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.itemList',
    title: 'Все товары',         
    store: 'Items',
    initComponent: function() {
        this.columns = [
            { header: 'Id', dataIndex: 'Id', flex: 1 },
            { header: 'Code', dataIndex: 'Code', flex: 1 },
            { header: 'Name', dataIndex: 'Name', flex: 1 },
            { header: 'Price', dataIndex: 'Price', flex: 1 },
            { header: 'Category', dataIndex: 'Category', flex: 1 }
        ];

        this.callParent(arguments);

    }

    // {xtype: 'panel',
        // region: 'west',
        // title: 'фильтрация',
        // collapsible: true,
        //}
    


});