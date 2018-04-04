Ext.define('SmartCom.view.item.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.itemList',
    title: 'Все товары',
    store: 'Items',
    dockedItems: [{
        xtype: 'toolbar',
        items: [
            { text: 'Добавить', itemId: 'addButton' },
            { text: 'Редактировать', itemId: 'editButton', disabled: true},
            { text: 'Удалить', itemId: 'deleteButton', disabled: true },
            { text: 'Корзина', itemId: 'cartButton'}
                                                           
        ]
    }],
    initComponent: function () {
        this.columns = [
            { header: 'Id', dataIndex: 'id', flex: 1 },
            { header: 'Code', dataIndex: 'code', flex: 1 },
            { header: 'Name', dataIndex: 'name', flex: 1 },
            { header: 'Price', dataIndex: 'price', flex: 1 },
            { header: 'Category', dataIndex: 'category', flex: 1 }
        ];

        this.callParent(arguments);

    }

    // {xtype: 'panel',
    // region: 'west',
    // title: 'фильтрация',
    // collapsible: true,
    //}



});