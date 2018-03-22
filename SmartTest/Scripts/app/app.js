Ext.application({

    name: 'SmartCom',

    appFolder: 'Scripts/app',

    controllers: [
        'ItemController'
        //'CustomerController'
    ],    
	
    views: [
        //'AdminControlPanel',
        //'customer.List',
      //  'item.List'
    ],

    launch: function () {
        console.log('launch'); // this works fine
        Ext.create('Ext.container.Viewport',
            {
                layout: 'fit',

                items: [
                    { //xtype: 'adminControlPanel',
						xtype: 'itemList'
					
           // xtype: 'container',
           // id: 'content-container',
           // region: 'center',
           // html: '<h1>huy3</h1>'
                     }
                ]
            });

    }
	
});
