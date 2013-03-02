/**
 * Message box which hide automatically
 *
 * @class Ext.ux.touch.AutoHideMessageBox
 * @version 0.1.0
 * @author Tomoyuki Kashiro <kashiro@github>
 * @license
 */
Ext.define('Ext.ux.touch.AutoHideMessageBox', {

    requires: [
        'Ext.MessageBox'
    ],

    alternateClassName: [
        'autohideMsg'
    ],

    singleton: true,

    interval: 2000,

    instance: '',

    /**
     * show message box
     * @param  {Object} obj configuration
     * @param  {Number} obj.interval interval of hidden
     * @param  {String} obj.title alert title
     * @param  {String} obj.message alert message
     * @param  {Function} obj.callback called when Messagebox is hidden
     * @param  {Function} obj.scope scope of callback
     */
    alert:function (obj) {
        var me = this,
            param = obj || {},
            interval = param.interval || me.interval,
            instance = me.instance,
            title = param.title || '',
            message = param.message || '',
            callback = param.callback || Ext.emptyFn,
            scope = param.scope || window;

        instance.on('show', function () {
            Ext.defer(function(){
                instance.hide();
                callback.apply(scope);
            },interval);
        }, me, {
            single: true
        });

        instance.alert(title,message);
    }

}, function () {
    var me = this,
        instance = new Ext.MessageBox({
            cls: 'auto-hide-msg'
        });

    me.instance = instance;
});
