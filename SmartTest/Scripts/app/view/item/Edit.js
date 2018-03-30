Ext.define('SmartCom.view.item.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.itemedit',

    title: 'Редактирование товара',
    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'Code',
                        fieldLabel: 'code'
                    },
                    {
                        xtype: 'textfield',
                        name: 'name',
                        fieldLabel: 'name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Price',
                        fieldLabel: 'price'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Category',
                        fieldLabel: 'category'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});