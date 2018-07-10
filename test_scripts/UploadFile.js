const path = require('path');

describe('API COMMAND',()=>{
    const INPUT_FILE='#file-upload'
    const BTN_UPLOAD='#file-submit'
    it('UPLOAD FILE ',()=>{
        browser.url('https://the-internet.herokuapp.com/upload');

        browser.waitForVisible(INPUT_FILE,30000);

        browser.chooseFile(INPUT_FILE,path.join(__dirname,'./Alert.js'));

        $(BTN_UPLOAD).click();

        browser.pause(3000);

        browser.saveScreenshot('./ScreenShot.png')//chup man hinh
    })
})
