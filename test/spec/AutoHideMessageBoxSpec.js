'use strict';

describe('Test for Ext.ux.touch.AutoHideMessageBox', function() {

    beforeEach(function() {

    });

    afterEach(function() {

    });

    it('NameSpace : exist Ext.ux.touch.AutoHideMessageBox', function() {
        expect(Ext.ux.touch.AutoHideMessageBox).to.be.a('object');
    });

    it('Instance : AutoHideMessageBox has Ext.MessageBox instance', function() {
        expect(Ext.ux.touch.AutoHideMessageBox.instance.$className).to.eql('Ext.MessageBox');
        expect(Ext.ux.touch.AutoHideMessageBox.instance.getCls()).to.eql(['auto-hide-msg']);
    });

    it('Test for alert', function() {

        var msgBox = Ext.ux.touch.AutoHideMessageBox.instance,
            callbackSpy = sinon.spy(),
            param = {
                callback: callbackSpy
            },
            alertSpy = sinon.stub(msgBox, 'alert'),
            hideSpy = sinon.stub(msgBox, 'hide'),
            clock = sinon.useFakeTimers();

        Ext.ux.touch.AutoHideMessageBox.alert(param);
        msgBox.fireEvent('show');

        describe('check each state', function() {

            it('Ext.MessageBox.alert has been call', function() {
                expect(alertSpy.calledWith('','')).to.be.ok();
            });

            clock.tick(2000);

            it('call hide', function() {
                expect(hideSpy.called).to.be.ok();
            });

            it('call callback', function() {
                expect(callbackSpy.called).to.be.ok();
            });

        });



    });

});
