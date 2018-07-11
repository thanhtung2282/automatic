const LoginPage = require('../LoginPage_3');
const {equal} = require('assert');
describe('LOGIN PAGE',()=>{
    it('LOGIN FORM SUCCESS',()=>{
        let username='tomsmith';
        let password='SuperSecretPassword!';
        let pageUrl='https://the-internet.herokuapp.com/login';
        browser.url(pageUrl);
        LoginPage.inputUserName(username);
        LoginPage.inputPassword(password);
        LoginPage.btnSubmit();
        browser.pause(3000)
    });
});