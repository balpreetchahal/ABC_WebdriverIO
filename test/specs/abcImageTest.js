var abcImagePage = require('../../pageObject/abcImagePage.js');

describe('ABC Image Tests', function() {
	
	beforeAll(function () {
		browser.url("http://www.abc.net.au/news/2017-02-10/abc-open-pic-of-the-week/8256256");
    });
	
	 it('Verify the images load correctly', function() {
	    	expect(abcImagePage.gallery.isVisible()).toBeTruthy();
	    	for(var i=1;i<16;i++){
	    		expect(abcImagePage.verifyImagesLoad(i)).toBeTruthy();;
	    	}
	    });  
	
	 afterAll(function () {
	    });    
	    
});
	