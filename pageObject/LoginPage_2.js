const USERNAME_TXT = '#username';
const PASSWORD_TXT = '#password';
const LOGIN_BTN = '[type="submit"]';
const URL_SUCCESS = 'https://the-internet.herokuapp.com/secure';
const URL_ERROR = 'https://the-internet.herokuapp.com/login';

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
    loginToPage(username,password){
        this.username.setValue(username);
        this.password.setValue(password);
        this.loginBtn.click();
    }
}
module.exports = new LoginPage();