var abcTestPage = require('../../pageObject/abcTestPage.js');

describe('ABC News Tests', function() {
	
	beforeAll(function () {
		browser.url('http://www.abc.net.au/news/');
    });
	
	it('Verify ABC News page loads successfully', function(){
		expect(abcTestPage.justInMenuOption.isVisible()).toBeTruthy();
	});
		
    it('Verify news banner loads', function () {
        expect(abcTestPage.header.isVisible()).toBeTruthy();
    });
    
    it('Verify Just In page loads', function () {
    	abcTestPage.justInMenuOptionClick();
        expect(abcTestPage.justInPageHeader.getText()).toContain("Just In");
    });
    
    it('Verify Just In page contents', function(){
    	var numberOfNews = abcTestPage.numberOfNews.length;
    	for (var i=1;i<=numberOfNews;i++){
    		expect(abcTestPage.verifyTitle(i)).toBeTruthy();
    		expect(abcTestPage.verifyTimeStamp(i)).toBeTruthy();
    		expect(abcTestPage.verifyPageContents(i)).toBeTruthy();
    	}
    });
 
    afterAll(function () {
    });
    
    
});