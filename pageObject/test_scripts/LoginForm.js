const LoginPage = require('../LoginPage');
describe('LOGIN PAGE',()=>{
    it('LOGIN FORM SUCCESS',()=>{
        browser.url('https://the-internet.herokuapp.com/login');
        LoginPage.username.setValue('tomsmith');
        LoginPage.password.setValue('SuperSecretPassword!');
        LoginPage.loginBtn.click();
        browser.pause(3000);
    });
});