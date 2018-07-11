const USERNAME_TXT = '#username';
const PASSWORD_TXT = '#password';
const LOGIN_BTN = '#login';

class LoginPage {

    get username(){
        return $(USERNAME_TXT);
    }
    get username(){
        return $(PASSWORD_TXT);
        
    }
    get username(){
        return $(LOGIN_BTN);
        
    }
}
module.exports = new LoginPage();