describe('API Command',()=>{
    it('Open Page API',()=>{
        //B1 : mở page google
        browser.url('https://google.com');

        //B2 setValue "AUTOMATION TEST" into field search of gg

        let SEARCH_TXTBX = '#lst-ib';
        browser.waitForVisible(SEARCH_TXTBX,3000)
        $(SEARCH_TXTBX).setValue('AUTOMATION');
    })
});