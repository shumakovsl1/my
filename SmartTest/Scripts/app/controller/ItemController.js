Ext.define('SmartCom.controller.ItemController', {
    extend: 'Ext.app.Controller',
    stores: ['Items', 'ShopingCart'],
    models: ['Item'],
    views: ['item.List', 'item.Add', 'item.Edit', 'item.ShopingCart'],
    refs: [
        {
            ref: 'list',
            selector: 'itemList'
        }     
    ],
    init: function () {
        this.control({
            'itemList': {
                itemclick: this.itemClick
            },
            'itemList #editButton': {
                click: this.editItem
            },
            'itemList #deleteButton': {
                click: this.deleteItem             
            },
            'itemList #addButton': {

                click: this.addForm
            },
            'itemList #cartButt': {
                click: this.showCart
            },
             'itemList #addToCartButt': {
                 click: this.addToCart                
            },
            'itemadd button[action=save]': {
                click: this.addItem
            },
            'itemedit button[action=save]': {
                click: this.updateItem
            },
            'shopingCart #deleteButt': {
                click: this.removeFromCart
            }
        }); 
    },

    itemClick: function (grid, row) {
        grid.up('itemList').down('#editButton').setDisabled(row.length === 0);
        grid.up('itemList').down('#deleteButton').setDisabled(row.length === 0);
        grid.up('itemList').down('#addToCartButt').setDisabled(row.length === 0);
    },

    addForm: function() {
        Ext.widget('itemadd');
    },

    addItem: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues();
        win.close();
        this.getItemsStore().add(values);
        this.getItemsStore().sync();
    },

    editItem: function (editButt) {
        try {
            var rowData = editButt.up('itemList').getView().getSelectionModel().getSelection()[0];
            Ext.widget('itemedit').down('form').loadRecord(rowData);

        } catch (e) {
            Ext.MessageBox.alert('Внимание!', 'Выберите товар!');
        }
    },

    updateItem: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getItemsStore().sync();
    },

    deleteItem: function () {
        try {
            Ext.MessageBox.confirm('Удаление', 'Удалить товар?', this.removeItem, this);
        } catch (e) {
            Ext.MessageBox.alert('Внимание!', 'Выберите товар!');
        }
    },

    removeItem: function (btn) {
        if (btn === 'yes') {
            var selection = this.getList().getSelectionModel().getSelection()[0];
            this.getItemsStore().remove(selection);
            this.getItemsStore().sync();
        }
    },

    addToCart: function (btn) {
        var shopingCart = this.getStore('ShopingCart');       
        var item = this.getList().getSelectionModel().getSelection()[0];   
        if (item) {
            shopingCart.add(item);           
            shopingCart.sync();
        } else { Ext.MessageBox.alert('Внимание!', 'Выберите товар!');}
    },

    showCart: function () {
        var view = Ext.getCmp('cartWidget');
        if (!view) {
           view = this.getView('item.ShopingCart').create();
        } else view.show();
    },
    removeFromCart: function(btn) {
        var shopingCart = this.getStore('ShopingCart');
        var item = btn.up('gridpanel').getView().getSelectionModel().getSelection()[0];
        if (item) {
            shopingCart.remove(item);
            shopingCart.total -= item.data.price;
            shopingCart.sync();
        } else { Ext.MessageBox.alert('Внимание!', 'Выберите товар!'); }
    }

});