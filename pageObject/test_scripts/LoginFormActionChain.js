const LoginPage = require('../LoginPageActionChain');
const dataLoginPage = require('../test_Data/LoginPage.json');
describe('LOGIN PAGE ACTION CHAIN', () => {
    let pageUrl = 'https://the-internet.herokuapp.com/login';
    before('open page for test',()=>{
        LoginPage.openPage(pageUrl);
    })
    beforeEach('refesh for test',()=>{
        browser.refresh();
    })
    it('CHECK LOGIN TITLE', () => {
        LoginPage.verifyTitle();
    });
    it('LOGIN FORM SUCCESS', () => {
        result = LoginPage
            .inputUserName(dataLoginPage.correctCredential.username)
            .inputPassword(dataLoginPage.correctCredential.password)
            .btnSubmit()
    });
    after('Clear data after test case',()=>{
        console.log('Clear data')
    });
});