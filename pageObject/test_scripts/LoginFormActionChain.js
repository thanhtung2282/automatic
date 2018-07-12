const LoginPage = require('../LoginPageActionChain');
const { equal } = require('assert');
describe('LOGIN PAGE ACTION CHAIN', () => {
    it('LOGIN FORM SUCCESS', () => {
        let username = 'tomsmith';
        let password = 'SuperSecretPassword!';
        let pageUrl = 'https://the-internet.herokuapp.com/login';


        result = LoginPage
            .openPage(pageUrl)
            .inputUserName(username)
            .inputPassword(password)
            .btnSubmit()
            .getText();
        equal(result, 'Secure Area')
    });
});