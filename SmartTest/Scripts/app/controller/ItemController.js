Ext.define('SmartCom.controller.ItemController', {
    extend: 'Ext.app.Controller',
    stores: ['Items'],
    models: ['Item'],
    views: ['item.List', 'item.Add', 'item.Edit'],
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
             'itemList #cartButton': {
                click: this.addToCart         
            },
            'itemadd button[action=save]': {
                click: this.addItem
            },
            'itemedit button[action=save]': {
                click: this.updateItem
            }         
        });
    },

    itemClick: function (grid, row) {
        grid.up('itemList').down('#editButton').setDisabled(row.length === 0);
        grid.up('itemList').down('#deleteButton').setDisabled(row.length === 0);
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

    addToCart: function () {

        var shopingCart = window.shopingCart;
        var item = this.getList().getSelectionModel().getSelection()[0];
        if (item) {
            shopingCart.add(item);
        } else { Ext.MessageBox.alert('Внимание!', 'Выберите товар!');}

    }

});