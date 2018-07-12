const Base = require('./Base');
const { expect  } = require('chai');
const SecureAreaPage = require('./SecureAreaPage');
const USERNAME_TXT = '#username';
const PASSWORD_TXT = '#password';
const LOGIN_BTN = '[type="submit"]';
const URL_SUCCESS = 'https://the-internet.herokuapp.com/secure';
const URL_ERROR = 'https://the-internet.herokuapp.com/login';
const LOGIN_TITLE ='h2'
class LoginPage extends Base {
    
    inputUserName(username){
        $(USERNAME_TXT).setValue(username);
        return this;
    }
    inputPassword(password){
        $(PASSWORD_TXT).setValue(password);
        return this;
        
    }
    btnSubmit(){
        $(LOGIN_BTN).click();
        return SecureAreaPage;
        
    }
    getLoginTitle(){
        return $(LOGIN_TITLE).getText();
    }
    verifyTitle(){
        let title = this.getLoginTitle();
        let expectedTitle = 'Login Page';
        expect(title).to.equal(expectedTitle,'ERR: Login Title Wrong');
        
    }
}
module.exports = new LoginPage();