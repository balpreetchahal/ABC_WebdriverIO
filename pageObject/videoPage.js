var page = require('./page');

var videoPage = Object.create(page, { 
	playButton: { get: function () { return $("[aria-label='Play']"); } },
	videoButton: { get: function () { return $('#jwplayer-video-0'); } },
	
	 videoButtonClick: { value: function() {
         this.videoButton.click();
      }},
	
});
module.exports = videoPage;