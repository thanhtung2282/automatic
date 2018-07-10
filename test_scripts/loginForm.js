describe('API Command',()=>{
    it('Login Form PASS',()=>{
        browser.url('https://the-internet.herokuapp.com/login');

        const USERNAME = '#username';
        const PASSWORD = '#password';
        const BTN_SUBMIT = '[type="submit"]';

        browser.waitForVisible(USERNAME,10000);
        $(USERNAME).setValue('tomsmith');

        browser.waitForVisible(PASSWORD,10000);
        $(PASSWORD).setValue('SuperSecretPassword!');

        browser.waitForVisible(BTN_SUBMIT,10000);
        $(BTN_SUBMIT).click();

    });
});