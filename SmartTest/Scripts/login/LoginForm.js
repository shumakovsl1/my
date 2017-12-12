Ext.define('SmartCom.LoginForm', {
    extend: 'Ext.form.Panel',
    title: 'Авторизация',
    alias: 'widget.loginForm',
  
 
    url: ' /Account/Login',
 
 

    defaultType: 'textfield',
    items: [{
        fieldLabel: 'Login',
        name: 'Name',
        style: {
            marginTop: '5px'
        },
        allowBlank: false
    },{
        fieldLabel: 'Password',
        name: 'Password',
        inputType: 'password',
        allowBlank: false
    }],


    buttons: [
 {
        text: 'Войти',
        formBind: true, 
        disabled: true,
        handler: function() {
            var form = this.up('form').getForm();            
            if (form.isValid()) {
               var viewPort = form.owner.up('viewport');
               viewPort.setLoading(true);
                form.submit({
                    success: function (form, action) {
                        viewPort.setLoading(false);
                        var location = action.result.data.url;
                        window.location.href = location;
                    },
                    failure: function (form, action) {
                        viewPort.setLoading(false);
                        Ext.Msg.alert('Failed', action.result.msg);
                    }
                });
            }
        }
    }],
    renderTo: Ext.getBody()
});