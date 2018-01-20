var page = require('./page');

var abcBigIdeasPage = Object.create(page, { 
	twitterWidget: { get: function () { return $("//iframe[@id='twitter-widget-0']"); } },
	downloadAudioButton: { get: function () { return $("//a[@class='ico ico-download']"); } },
	video: { get: function () { return $("//video"); } },
	listenNowButton: { get: function () { return $("//li//a[@class='ico ico-audio modrewrite']"); } },
	player: { get: function () { return $('#player'); } },
	radioPanel: { get: function () { return $("//div[@class='rp__playingPanel__bg']"); } },
	
	
	twitterWidgetClick: { value: function() {
         this.twitterWidget.click();
      }},
      
      listenNowButtonClick: { value: function() {
         this.listenNowButton.click();
      }},
      
      switchTab: { value: function(tab) {
    	  browser.switchTab(tab).pause(3000);
      }},
      
      verifyTwitterWindow: { value: function(currentTab,openTabs) {
    	  if(currentTab === openTabs[0])
    		  this.switchTab(openTabs[2]);
    	  return browser.getUrl();
       }},
       
       audioButtonClick: { value: function(windowID) {
    	   this.downloadAudioButton.waitForVisible(2000);
    	   this.downloadAudioButton.click();
       }},
       
       
	
});
module.exports = abcBigIdeasPage;