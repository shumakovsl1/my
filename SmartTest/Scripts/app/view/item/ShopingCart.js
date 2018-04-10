Ext.define('SmartCom.view.item.ShopingCart', {
    extend: 'Ext.window.Window',
    alias: 'widget.shopingCart',
     id: 'cartWidget',
    title: 'Корзина',
    layout: 'fit',
    autoShow: true,
    closeAction: 'hide',
    items: [
        {
            xtype: 'gridpanel',          
            width: 400,
            height: 200,
            store: 'ShopingCart',
            columns: [
                { header: 'Code', dataIndex: 'code', flex: 1 },
                { header: 'Name', dataIndex: 'name', flex: 1 },
                { header: 'Price', dataIndex: 'price', flex: 1 },
                { header: 'Category', dataIndex: 'category', flex: 1 },
                { header: 'Count', dataIndex: 'count', flex: 1 }

            ],
            dockedItems: [{
                xtype: 'toolbar',
                items: [
                    { xtype: 'text', name: 'totalField' },
                    { text: 'Удалить', itemId: 'deleteButt' },
                    { text: 'Заказать всё', itemId: 'orderButt' }
                ]
            }],
            renderTo: Ext.getBody()
        }
    ],
    initComponent: function () {
        this.callParent(arguments);
        var me = this;
        this.on('afterRender',
            function () {
                me.updateTotal();
            });
        var grid = this.down('gridpanel'),
            store = grid.getStore();
        store.on('datachanged',
            function () {
                me.updateTotal();
            });
    },

    updateTotal: function () {
        var grid = this.down('gridpanel');
        if (!grid){
            Ext.widget('shopingCart');
        }
           var store = grid.getStore();
        var toolbar = grid.down('toolbar'),
            totalField = toolbar.down('text[name=totalField]');
        totalField.setText('Всего: ' + store.total);
    }



});

