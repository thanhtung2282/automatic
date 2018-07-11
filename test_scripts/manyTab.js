describe('API COMMAND',()=>{
    const IMPROVE_DOC_LINK = '=Improve this doc';
    it('WitchTab new',()=>{
        // open page 
        browser.url('http://webdriver.io/api.html');
        //click [Improve this doc]
        //->2 tabs
        browser.waitForVisible(IMPROVE_DOC_LINK,10000);
        $(IMPROVE_DOC_LINK).click();
        browser.pause(2000);
        //get AllTAb
        let allTabIds = browser.getTabIds();//["CDwindow-FE88376C75E9E925EA40BED363D1845B","CDwindow-BB0729B14D1FAEEE96224586986A5AD6"]
        //get  pagetitle [1]
        let titlePage_1 = browser.getTitle();//WebdriverIO - API Docs
        //switch new tab
        browser.switchTab(allTabIds[1]);
        //get page title [2]
        let titlePage_2 = browser.getTitle();//Sign in to GitHub · GitHub
        //swich old page
        browser.switchTab(allTabIds[0]);
        //get page title
        let titlePage_3 = browser.getTitle();//WebdriverIO - API Docs

    });
});