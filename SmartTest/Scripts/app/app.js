
Ext.Loader.setConfig({
    disableCaching: false
});

Ext.Ajax.disableCaching = true;

Ext.application({

    name: 'SmartCom',

    appFolder: 'Scripts/app',

    controllers: ['CustomerController'],    
	
    views: [
        'LoginForm',
        'AdminControlPanel',
        'customer.List'

    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',

            items: [
                { xtype: 'loginForm' }                          
            ]
        })
    
    }
	
});
