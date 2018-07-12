const LoginPage = require('../LoginPageActionChain');
const dataLoginPage = require('../test_Data/LoginPage.json');
const { expect  } = require('chai');
describe('LOGIN PAGE ACTION CHAIN', () => {
    let pageUrl = 'https://the-internet.herokuapp.com/login';
    before('open page for test',()=>{
        LoginPage.openPage(pageUrl);
    })
    beforeEach('refesh for test',()=>{
        browser.refresh();
    })
    it('LOGIN FORM FAIL', () => {
        result = LoginPage
            .inputUserName(dataLoginPage.incorrectCredential.username)
            .inputPassword(dataLoginPage.incorrectCredential.password)
            .btnSubmit()
            browser.pause(2000)
    });
    it('LOGIN FORM SUCCESS', () => {
        result = LoginPage
            .inputUserName(dataLoginPage.correctCredential.username)
            .inputPassword(dataLoginPage.correctCredential.password)
            .btnSubmit()
            .getText();
        expect(result).to.be.a('string','ERR: Result not a string');
    });
    after('Clear data after test case',()=>{
        console.log('Clear data')
    });
});