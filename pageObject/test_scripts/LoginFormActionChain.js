const LoginPage = require('../LoginPageActionChain');
const { equal } = require('assert');
describe('LOGIN PAGE ACTION CHAIN', () => {
    it('LOGIN FORM SUCCESS', () => {
        let username = 'tomsmith';
        let password = 'SuperSecretPassword!';
        let pageUrl = 'https://the-internet.herokuapp.com/login';
        browser.url(pageUrl);

        result = LoginPage
            .inputUserName(username)
            .inputPassword(password)
            .btnSubmit()
            .getText();
        equal(result, 'Secure Area')
        browser.pause(5000);
    });
});