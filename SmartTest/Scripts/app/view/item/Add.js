Ext.define('SmartCom.view.item.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.itemadd',

    title: 'Добавление товара',
    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'code',
                        fieldLabel: 'Code'
                    },
                    {
                        xtype: 'textfield',
                        name: 'name',
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'price',
                        fieldLabel: 'Price'
                    },
                    {
                        xtype: 'textfield',
                        name: 'category',
                        fieldLabel: 'Category'
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