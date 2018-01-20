var page = require('./page');

var abcTestPage = Object.create(page, { 
   
	justInMenuOption: { get: function () { return $('#n-justin'); } },
	header:  { get: function () { return $('#header'); } },
	justInPageHeader:  { get: function () { return $('#container_subheader'); } },
	numberOfNews: { get: function () { return $$('.article-index li'); } },
	
	
	justInMenuOptionClick: { value: function() {
        this.justInMenuOption.click();
     }},
     
     verifyTitle: { value: function(i) {
    	var title=browser.element("//ul[@class='article-index']//li["+i+"]//h3//a").getText();
    	 if((title.replace(/\s/g, '')).length >0)
    	    	return true;
    	    	else
    	    	return false;
     }},
     
     verifyTimeStamp: { value: function(i) {
     	var timestamp = browser.element("//ul[@class='article-index']//li["+i+"]//p").element("//span[@class='timestamp']").getText();
     	if(timestamp.includes("minutes ago") || timestamp.includes("hour ago") || timestamp.includes("hours ago") )
     		return true;
     	else
     		return false;
     }},
     
     verifyPageContents: { value: function(i) {
    	 var content = browser.element("//ul[@class='article-index']//li["+i+"]//p[2]").getText();
    	 if((content.replace(/\s/g, '')).length >0)
         	return true;
     	else
     		return false;
     }},
});
module.exports = abcTestPage;
