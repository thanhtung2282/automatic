const LoginPage = require('../LoginPage');
const {equal} = require('assert')
describe('LOGIN PAGE',()=>{
    it('LOGIN FORM SUCCESS',()=>{
        browser.url('https://the-internet.herokuapp.com/login');
        LoginPage.username.setValue('tomsmith');
        LoginPage.password.setValue('SuperSecretPassword!');
        LoginPage.loginBtn.click();
        equal(browser.getUrl(),LoginPage.urlSuccess); 
        browser.pause(3000);
    });
});