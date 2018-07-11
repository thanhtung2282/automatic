const LoginPage = require('../LoginPage_2');
const {equal} = require('assert');
describe('LOGIN PAGE',()=>{
    it('LOGIN FORM SUCCESS',()=>{
        let username='tomsmith';
        let password='SuperSecretPassword!';
        let pageUrl='https://the-internet.herokuapp.com/login';
        browser.url(pageUrl);
        LoginPage.loginToPage(username,password);
        equal(browser.getUrl(),LoginPage.urlSuccess);
    });
});