Ext.define("SmartCom.model.CustomerCart", {
    items: [],
    total: 0,
    remove: function(item) {
        this.items.splice();
        this.saveToCookie();
    },
    add: function(item) {
        this.items.push(item);
        this.total += item.price;
        this.saveToCookie();
    },
    saveToCookie: function () {
        var itemStr = this.items.join(';');
        Ext.util.Cookies.set('customerCart', itemStr);
    },
    init: function(parameters) {
        var cookie = Ext.util.Cookies.get('customerCart');
        if (cookie) {
            var items = cookie.split(';');
            if (items.length) {
                this.items = items;
            }
            this.total = this.items.sum('price');
        }
    }

});