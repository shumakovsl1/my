Ext.application({

    name: 'SmartCom',

    appFolder: 'Scripts/app',

    //controllers: ['CustomerController'],    
	
    views: [
        'AdminControlPanel',
        'customer.List'

    ],

    launch: function () {
        console.log('launch'); // this works fine
        Ext.create('Ext.container.Viewport',
            {
                layout: 'border',

                items: [
                    { xtype: 'adminControlPanel' }
                ]
            });

    }
	
});
