var page = require('./page');

var abcRadioPage = Object.create(page, { 
	programLink: { get: function () { return $('.sf-with-ul'); } },
	programOption: { get: function () { return $("//ul[@id='rn-programindex']//li[5]"); } }, 
	programPageHeader: { get: function () { return $("//div[@class='view-brand-heading']//h1"); } },
	programBannerOptions: { get: function () { return $$(".at-a-glance li"); } },
	programBannerRightArrow: { get: function () { return $('#right-arrow'); } },
	searchBox: { get: function () { return $('#search-simple-input-query'); } }, 
	searchButton: { get: function () { return $('#search-simple-input-submit'); } },
	searchResult: { get: function () { return $(".ct-search-header p"); } },
	
	clickProgramLink: { value: function() {
         this.programLink.click();
      }},
      
     clickProgramOption: { value: function() {
          this.programOption.click();
       }},
       
     clickSearchButton: { value: function() {
           this.searchButton.click();
        }},
     verifyProgramPage: { value: function() {
           return this.programPageHeader.getText();
        }},
        
      verifySearch:{ value: function() {
           return this.searchResult.getText();
        }},
        
      selectLastBannerOption: { value: function() {
        	var menuOptions = (((this.programBannerOptions).length))-1;
        	while((browser.isVisible("//ul[@class='at-a-glance']//li["+menuOptions+"]")) == false){
        		this.programBannerRightArrow.click();
        	}
        	browser.click("//ul[@class='at-a-glance']//li["+menuOptions+"]");
        }},
       
	
});
module.exports = abcRadioPage;