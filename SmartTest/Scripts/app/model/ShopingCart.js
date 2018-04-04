Ext.define("SmartCom.model.ShopingCart", {
    items: [],
    total: 0,
    remove: function(item) {
        this.items.splice(item);
        this.saveToCookie();
    },
    add: function(item) {
        this.items.push(item);
        this.total += item.data.price;
        this.saveToCookie();
    },
    saveToCookie: function () {
        var itemStr = this.items.join(';');
        Ext.util.Cookies.set('shopingCart', itemStr);
    },
    init: function(parameters) {
        var cookie = Ext.util.Cookies.get('shopingCart');
        if (cookie) {
            var items = cookie.split(';');
            if (items.length) {
                this.items = items;
            }
            this.total = this.items.sum('price');
        }
    }

});