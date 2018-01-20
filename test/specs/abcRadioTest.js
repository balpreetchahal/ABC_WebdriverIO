var abcRadioPage = require('../../pageObject/abcRadioPage.js');

describe('ABC Radio National Page Tests', function() {
	
	beforeAll(function () {
		browser.url("http://www.abc.net.au/radionational/");
    });  

    it('Can navigate to a program from menu', function() {
    	abcRadioPage.clickProgramLink();
    	abcRadioPage.clickProgramOption();
        expect(abcRadioPage.verifyProgramPage()).toEqual("AM");
        browser.back();
    });
    
    it('Select last option in Program Guide Banner', function() {
    	abcRadioPage.selectLastBannerOption();
    	browser.back();
    });
    
    it('Can search for content in the search bar', function() {
    	abcRadioPage.searchBox.setValue('seven hills');
    	abcRadioPage.clickSearchButton();
    	abcRadioPage.searchResult.waitForVisible(8000);
    	expect((abcRadioPage.verifySearch()).includes("Your search for matched items"));	
    });
    
    afterAll(function () {
    });      
});
