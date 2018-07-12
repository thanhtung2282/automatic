const LoginPage = require('../LoginPageActionChain');
const { equal } = require('assert');
describe('LOGIN PAGE ACTION CHAIN', () => {
    let pageUrl = 'https://the-internet.herokuapp.com/login';
    before('open page for test',()=>{
        LoginPage.openPage(pageUrl);
        console.log('open page')
        
    })
    it('LOGIN FORM SUCCESS', () => {
        let username = 'tomsmith';
        let password = 'SuperSecretPassword!';
        result = LoginPage
            .inputUserName(username)
            .inputPassword(password)
            .btnSubmit()
            .getText();
        equal(result, 'Secure Area')
    });
    after('Clear data after test case',()=>{
        console.log('Clear data')
    });
});