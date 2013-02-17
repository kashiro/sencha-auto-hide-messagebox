Ext.define('AutoHideMassageBox.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.ux.touch.AutoHideMessageBox'
    ],
    config: {
        fullscreen: true,
        listeners: {
            show: 'showAlert'
        }
    },

    /**
     * show alert box
     */
    showAlert: function () {
        var me = this,
            config = {
                title: 'auto hide',
                message: 'message',
                callback: me.afterHide,
                scope: me
            };
        Ext.ux.touch.AutoHideMessageBox.alert(config);
    },

    afterHide: function () {
        var me = this;
        me.setHtml('fire callback!!!');
    }
});
