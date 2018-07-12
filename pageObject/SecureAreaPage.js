
const TEXT = 'h2'
class SecureAreaPage{
    getText(){
        let text = $(TEXT).getText();
        return text;
    }
}
module.exports = new SecureAreaPage();