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
        let resultColor = $(RESULT).getCssProperty('color');
        console.log(resultColor) //get color
        let resultElementSize = $(RESULT).getElementSize();// get elementSize
        console.log(resultElementSize.width)//width:970
        
    });
    xit('ALERT DISMISS',()=>{
        $(JS_ALERT).click();
      
        browser.alertDismiss();

    });
    xit('ALERT TEXT',()=>{
        $(JS_ALERT).click();
      
        let alert = browser.alertText();
        console.log(alert)

    });
});