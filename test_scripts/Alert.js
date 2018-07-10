describe('API COMMAND',()=>{
    const JS_ALERT='[onclick="jsConfirm()"]';
    browser.url('https://the-internet.herokuapp.com/javascript_alerts');    
    it('ALERT ACCEPT',()=>{
        browser.waitForVisible(JS_ALERT,10000);
        $(JS_ALERT).click();
        browser.pause(3000);        
        browser.alertAccept();
        browser.pause(3000);
    });
    it('ALERT DISMISS',()=>{
        $(JS_ALERT).click();
        browser.pause(3000);        
        browser.alertDismiss();
        browser.pause(3000);
    });
    it('ALERT TEXT',()=>{
        $(JS_ALERT).click();
        browser.pause(3000);        
        let alert = browser.alertText();
        console.log(alert)
        browser.pause(3000);
    });
});