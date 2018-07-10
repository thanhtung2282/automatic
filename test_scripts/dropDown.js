describe('API Command',()=>{
    const DROPDOWN = '#dropdown';
    it('SELECT BY INDEX',()=>{
        //op 1
        browser.url('https://the-internet.herokuapp.com/dropdown');
        browser.waitForVisible(DROPDOWN,10000);
        $(DROPDOWN).selectByIndex(1);
        browser.pause(2000);
    });
    it('SELECT BY VALUE',()=>{
        //op 2
        $(DROPDOWN).selectByValue(2);
        browser.pause(2000);
    });
    it('SELECT BY VISIBLE TEXT',()=>{
        //op 2
        $(DROPDOWN).selectByVisibleText('Option 1');
        browser.pause(2000);
    });
});