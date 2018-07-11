const USERNAME_TXT = '#username';
const PASSWORD_TXT = '#password';
const LOGIN_BTN = '[type="submit"]';
const URL_SUCCESS = 'https://the-internet.herokuapp.com/secure';

class LoginPage {

    get username(){
        return $(USERNAME_TXT);
    }
    get password(){
        return $(PASSWORD_TXT);
    }
    get loginBtn(){
        return $(LOGIN_BTN);  
    }
    get urlSuccess(){
        return URL_SUCCESS;
    }
}
module.exports = new LoginPage();