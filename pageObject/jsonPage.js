var page = require('./page');

var jsonPage = Object.create(page, { 
   
	jsonRawData: { get: function () { return $("//li[@class='tabs-menu-item rawdata ']//a"); } },
	jsonData: { get: function () { return $('.data'); } },

	jsonRawDataButtonClick: { value: function() {
        this.jsonRawData.waitForVisible(3000);
        this.jsonRawData.click();
     }}, 
     
     getJsonData:{ value: function() {
        return this.jsonData.getText();
     }}, 
     
     
     verifyJsonData:{ value: function(dataToCompare) {
      var i=0;
      
	  JSON.parse(this.getJsonData(), function (Key, Value) {
		  if(JSON.stringify(Value) == '[]')
              Value = JSON.stringify(Value);
   	    if (Key === (dataToCompare[i].key) && Value === (dataToCompare[i].value)) {
              return true;
   	    } else {
   	    	return false;
   	    }i++;
   	    });
     }},
});
module.exports = jsonPage;