var abcBigIdeasPage = require('../../pageObject/abcBigIdeasPage.js'), openTabs;

describe('BigIdeas Page Tests', function() {
	beforeAll(function () {
		browser.url("http://www.abc.net.au/radionational/programs/bigideas/an-unwinnable-war/9162464");
    }); 
    
    it('Download audio button redirects to mp3 file', function(){
    	abcBigIdeasPage.audioButtonClick();
    	abcBigIdeasPage.video.waitForExist(5000);
    	expect(browser.getUrl()).toContain("mp3");
    	browser.back();
    });
    
    it('Listen Now Button Redirects to correct url', function() {
    	abcBigIdeasPage.listenNowButtonClick();
        openTabs = browser.getTabIds();
        abcBigIdeasPage.switchTab(openTabs[1]);
        abcBigIdeasPage.radioPanel.waitForExist(5000);
        expect(browser.getUrl()).toEqual('http://radio.abc.net.au/programitem/peaLJ4G4l3?play=true');
    });

    it('Audio Player loads Successfully', function() {
        expect(abcBigIdeasPage.player.isVisible()).toBeTruthy();
    });
    
    it('Twitter\'s ‘Share’ icon opens correct pop-up window', function() {
    	openTabs = browser.getTabIds();
    	abcBigIdeasPage.switchTab(openTabs[0]);
    	browser.scroll(0,400);
    	var currentTab = browser.getCurrentTabId();
    	abcBigIdeasPage.twitterWidgetClick();
    	openTabs = browser.getTabIds();
    	 expect(abcBigIdeasPage.verifyTwitterWindow(currentTab,openTabs)).toContain("twitter.com");
    });

    afterAll(function () {
    });    
    
});

    