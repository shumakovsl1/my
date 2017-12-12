
Ext.Loader.setConfig({
    disableCaching: false
});

Ext.Ajax.disableCaching = true;

Ext.application({

    name: 'LoginWindow',

    appFolder: 'Scripts/login',
  

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',

            items: [
                Ext.create('SmartCom.LoginForm')                        
            ]
        })
    
    }
	
});
