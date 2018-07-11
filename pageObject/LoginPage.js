const USERNAME_TXT = '#username';
const PASSWORD_TXT = '#password';
const LOGIN_BTN = '[type="submit"]';

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
}
module.exports = new LoginPage();