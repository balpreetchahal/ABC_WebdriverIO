var videoPage = require('../../pageObject/videoPage.js');

describe('ABC Video Tests', function() {
	
	beforeAll(function () {
		browser.url("http://www.abc.net.au/news/2017-02-09/weatherill-promises-to-intervene-dramatically/8254908");
    });
	
	  it('Verify video loads correctly', function() {
	    	expect(videoPage.playButton.isVisible()).toBeFalsy();
	    	videoPage.videoButtonClick();
	    	expect(videoPage.playButton.isVisible()).toBeTruthy();
	    });
	
	 afterAll(function () {
	    });    
	    
});
	