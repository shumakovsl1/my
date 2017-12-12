Ext.define('SmartCom.view.AdminControlPanel', {
    extend: 'Ext.container.Container',
    alias: 'widget.adminControlPanel',
    layout: {
        type: 'border',
 
    },
    items: [{
        region: 'north',
        xtype: 'panel',
        layout: 'hbox',
        items: [{
            xtype: 'tabpanel',
            flex: 6,
            dockedItems: [],

            items: [{
                title: '1',
                items: [{
                    xtype: 'buttongroup',
                    items: [{
                        text: 'huy1'
                        }
                    ]
                }]
            }, {
                title: '1'
            }, {
                title: '1'
            }]
        },{
            xtype: 'panel',
            title: 'Текущий пользователь',
            collapsible: true,
            flex: 1,
            dock: 'top',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            flex: 1,
            items: [
                {
                    xtype: 'textareafield',
                    itemId: 'roles',
                    disabled: true,
                },
                {
                    xtype: 'button',
                    text: 'Выход',
                },
            ]
        }]
    }, {
        xtype: 'container',
        id: 'content-container',
        region: 'center',
        html: '<h1>huy2</h1>'
    }
    ]
});