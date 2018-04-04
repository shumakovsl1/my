Ext.define('SmartCom.view.MainNav',
    {
        extend: 'Ext.container.Container',
        alias: 'widget.navigationPanel',
        layout: 'hbox',
        items: [
            {
                xtype: 'tabpanel',
                height: 100,
                flex: 5,
                role: 'Managers',
                items: [
                    {
                        title: 'Товары',
                        items: [
                            {
                                xtype: 'button',
                                html: '<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>',
                                component: 'SmartCom.view.item.List',
                                handler: function (itm) {
                                    var workArea = Ext.getCmp('mainWorkArea'),
                                        component = itm.component;
                                    var widget = Ext.create(component);
                                    workArea.add(widget);
                                }

                            }
                           
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                height: 100,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                title: window.userInfo.userName,
                html: userInfo.roles.join('; '),
                dockedItems: [{                  
                        xtype: 'button',
                        dock: 'bottom',
                        text: 'Выход'
                    }]               
            }
        ],
        initComponent: function () {
            var userInfo = window.userInfo;
            this.items.forEach(function (item) {
                if (item.role != null) {
                    var show = userInfo.roles.filter(function (x) {
                        return x.toLowerCase() === item.role.toLowerCase();
                    }).length;
                    item.hidden = !show;
                }
            });
            this.callParent(arguments);
        }
    });