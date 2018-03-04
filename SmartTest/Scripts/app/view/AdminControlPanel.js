Ext.define('SmartCom.view.AdminControlPanel', {
    extend: 'Ext.container.Container',
    alias: 'widget.adminControlPanel',
    items: [{
        region: 'north',
        xtype: 'panel',
        layout: 'hbox',
        items: [{
            xtype: 'tabpanel',
            flex: 8,
            items: [{
                title: '1',
                items: [{
                    xtype: 'buttongroup',
                    items: [{
                        text: 'Редактирование каталога'
                        }
                    ]
                }]
            }, {
                    title: '2',
                    items: [{
                        xtype: 'buttongroup',
                        items: [{
                                text: 'huy2'
                            }
                        ]
                    }]
            }, {
                    title: '3',
                    items: [{
                        xtype: 'buttongroup',
                        items: [{
                                text: 'huy3'
                            }
                        ]
                    }]
            }]
        },{
                xtype: 'panel',
                flex: 2,
            title: 'Текущий пользователь',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'textareafield',
                    itemId: 'roles',
                    disabled: true,
                },
                {
                    xtype: 'button',
                    text: 'Выход',
                }
            ]
        }]
    }],
    
        xtype: 'container',
        id: 'content-container',
        region: 'center',
        html: '<h1>huy3</h1>'
    
    
});