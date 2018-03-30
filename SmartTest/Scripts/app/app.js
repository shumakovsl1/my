Ext.application({
    name: 'SmartCom',
    appFolder: 'Scripts/app',

    controllers: [
        'ItemController'
        //'CustomerController'
    ],
    views: [
        'MainNav'
        //'customer.List',
    ],
    launch: function () {
        Ext.create('Ext.container.Viewport',
            {
                layout: 'border',
                items: [
                    {
                        xtype: 'navigationPanel',
                        region: 'north'                      
                    },
                    {
                        xtype: 'container',
                        region: 'center',
                        id: 'mainWorkArea'
                    }
                ]
            });

    }

});
