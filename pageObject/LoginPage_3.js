const USERNAME_TXT = '#username';
const PASSWORD_TXT = '#password';
const LOGIN_BTN = '[type="submit"]';
const URL_SUCCESS = 'https://the-internet.herokuapp.com/secure';
const URL_ERROR = 'https://the-internet.herokuapp.com/login';

class LoginPage {

    inputUserName(username){
        $(USERNAME_TXT).setValue(username);
    }
    inputPassword(password){
        $(PASSWORD_TXT).setValue(password);
    }
    btnSubmit(){
        $(LOGIN_BTN).click();
    }
}
module.exports = new LoginPage();