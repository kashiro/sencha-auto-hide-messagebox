describe("Test for Ext.ux.touch.AutoHideMessageBox", function() {

    beforeEach(function() {
      
    });

    afterEach(function() {
      
    });

    it("NameSpace : exist Ext.ux.touch.AutoHideMessageBox", function() {
        expect(Ext.ux.touch.AutoHideMessageBox).toBeDefined();
    });

    it("Instance : AutoHideMessageBox has Ext.MessageBox instance", function() {
        expect(Ext.ux.touch.AutoHideMessageBox.instance.$className).toEqual('Ext.MessageBox');
        expect(Ext.ux.touch.AutoHideMessageBox.instance.getCls()).toEqual(['auto-hide-msg']);
    });

    it("Test for alert", function() {
   
        var msgBox = Ext.ux.touch.AutoHideMessageBox.instance,
            callbackSpy = sinon.spy(),
            param = {
                callback: callbackSpy
            },
            alertSpy = sinon.spy(msgBox, 'alert'),
            hideSpy = sinon.spy(msgBox, 'hide');
            clock = sinon.useFakeTimers();

        Ext.ux.touch.AutoHideMessageBox.alert(param);

        describe("check each state", function() {
        
            it("Ext.MessageBox.alert has been call", function() {
                expect(alertSpy).toHaveBeenCalledWith('','');
            });

            clock.tick(2000);

            it("call hide", function() {
                expect(hideSpy).toHaveBeenCalled();
            });

            it("call callback", function() {
                expect(callbackSpy).toHaveBeenCalled();
            });

        });

         

    });
  
});