var jsonPage = require('../../pageObject/jsonPage.js');

describe('ABC JSON Tests', function() {
	
	beforeAll(function () {
		browser.url("http://program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json");
    });  
 
var dataToCompare = [];
    dataToCompare.push({key:'entity', value:'Program'}, {key:'arid', value:'ppJj0E8g2R'}, {key:'title', value:'Mornings'},
    		{key:'mini_synopsis', value:'Mornings with Genevieve Jacobs is the whole story, bringing you fresh local and regional information'},
    		{key:'short_synopsis', value:'Mornings with Genevieve Jacobs is the whole story, bringing you fresh local and regional information.'},
    		{key:'medium_synopsis', value:'Mornings with Genevieve Jacobs is the whole story, bringing you fresh local and regional information. Local stories and issues are at the heart of the Mornings program, including your opportunity to ask direct questions to the ACT Chief Minister each fortnight.'},
    		{key:'created_utc', value:'2014-10-09T05:01:49+0000'}, {key:'last_updated_utc', value:'2017-12-11T13:23:02+0000'},
    		{key:'service_airport_code', value:null},
    		{key:'properties', value:'[]'});
    
    
    it('Verify key/value pair from json output', function() {
    	jsonPage.jsonRawDataButtonClick();
    	expect(jsonPage.verifyJsonData(dataToCompare)).toBeTruthy();
    })
    
    afterAll(function () {
    });      
});
