Ext.define("SmartCom.store.ShopingCart", {
    extend: "Ext.data.Store",
    autoLoad: true,
    proxy: {
        type: 'memory',
        id: 'shopingCart'
    },
    total: 0,
    model: 'SmartCom.model.ShopingCartModel',
    constructor: function () {
        this.callParent(arguments);
        var store = this;
        store.on('datachanged',
            function () {
                var data = store.data;
                var sum = 0;
                data.items.forEach(function (itm) {
                    var data = itm.getData();
                    sum += (data.price * data.count);
                });
                store.total = sum;
            });
    },
    add: function (itm) {
        var store = this;
        var record = store.findRecord('id', itm.getData().id);
        if (record) {
            record.set('count', record.getData().count + 1);
        } else {
            var model = Ext.create('SmartCom.model.ShopingCartModel', itm.getData());
            model.set('count', 1);
            this.callParent([model]);
        }
    },
    remove: function (itm) {
        var store = this;
        var record = store.findRecord('id', itm.getData().id);
        if (record) {
            record.set('count', record.getData().count + 1);
            var count = record.getData().count;
            if (!count) {
                this.callParent([record]);
            }
        }
    }



    //items: [],

    //remove: function(item) {
    //    this.items.splice(item);
    //    this.saveToCookie();
    //},
    //add: function(item) {
    //    this.items.push(item);
    //    this.total += item.data.price;
    //    this.saveToCookie();
    //},
    //saveToCookie: function () {
    //    var itemStr = this.items.join(';');
    //    Ext.util.Cookies.set('shopingCart', itemStr);
    //},
    //init: function(parameters) {
    //    var cookie = Ext.util.Cookies.get('shopingCart');
    //    if (cookie) {
    //        var items = cookie.split(';');
    //        if (items.length) {
    //            this.items = items;
    //        }
    //        this.total = this.items.data.sum('price');
    //    }
    //}

});