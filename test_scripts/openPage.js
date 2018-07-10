describe('API Command',()=>{
    it('Open Page API',()=>{
        //B1 : mở page google

        browser.url('https://google.com');
        browser.pause(3000);

        //B2 setValue "AUTOMATION TEST" into field search of gg

        $('#lst-ib').setValue('AUTOMATION TEST');
        // browser.setValue('#lst-ib','TEST');
        browser.pause(3000);
        
    })
});