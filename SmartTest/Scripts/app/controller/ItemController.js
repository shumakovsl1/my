Ext.define('SmartCom.controller.ItemController', {
    extend: 'Ext.app.Controller',
    stores: ['Items'],
    models: ['Item'],
    views: ['item.List'],
    init: function () {
        this.control({
            'itemList': {
                itemclick: this.itemClick
            },
            'itemList #editButton': {
                click: this.edit
            }
        });
    },

    itemClick: function (grid, row) {
        grid.up('itemList').down('#editButton').setDisabled(row.length === 0);
        grid.up('itemList').down('#deleteButton').setDisabled(row.length === 0);
    },

    edit: function(editButt) {
        try {
            var rowData = editButt.up('itemList').getView().getSelectionModel().getSelection()[0].data;
       
            console.log(rowData);
        } catch(e) {
            Ext.MessageBox.alert('Внимание!', 'Выберите товар!');
    }
}
});