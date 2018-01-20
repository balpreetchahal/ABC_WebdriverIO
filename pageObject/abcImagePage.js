var page = require('./page');

var abcImagePage = Object.create(page, { 
	gallery: { get: function () { return $(".slideshowpro-gallery"); } },
	
	 verifyImagesLoad: { value: function(i) {
		var width=browser.getElementSize(("//ul[@class='imageGallery lightSlider lSSlide']//li["+i+"]//img"),'width');
     	var height=browser.getElementSize(("//ul[@class='imageGallery lightSlider lSSlide']//li["+i+"]//img"),'height');
     	if(width == 940 && height == 670){
     		return true;
     	}
     	else{
     		return false;
     	}
      }},
	
});
module.exports = abcImagePage;