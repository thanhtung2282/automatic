describe('API COMMAND',()=>{
    const JS_ALERT='[onclick="jsConfirm()"]';
    const RESULT='#result';
    browser.url('https://the-internet.herokuapp.com/javascript_alerts');    
    it('ALERT ACCEPT',()=>{
        browser.waitForVisible(JS_ALERT,10000);
        $(JS_ALERT).click();
    
        browser.alertAccept();
        let result = $(RESULT).getText();
        console.log(result) //You clicked: Ok
    });
    it('ALERT DISMISS',()=>{
        $(JS_ALERT).click();
      
        browser.alertDismiss();

    });
    it('ALERT TEXT',()=>{
        $(JS_ALERT).click();
      
        let alert = browser.alertText();
        console.log(alert)

    });
});