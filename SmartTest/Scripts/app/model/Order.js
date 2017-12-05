Ext.define("SmartCom.model.Order", {
    extend: "Ext.data.Model",
    fields: ["Id", "ShipmentDate", "OrderDate", "OrderNumber", "Status", "CustomerId"]
});