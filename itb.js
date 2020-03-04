
describe('angularjs homepage', function() {
	
  it('should greet the named user', function() {
	  
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 240000;

		browser.get('http://demo.stagingitb.com:27472/#/access/login');

		element(by.name('username')).sendKeys('manager@demo.com');
		element(by.name('password')).sendKeys('123456');
		var s=element(by.xpath('//*[@id="form-login"]/div[6]/div[2]/div/button'));
		browser.executeScript("arguments[0].click();", s);

		var EC = protractor.ExpectedConditions;

		browser.wait(EC.titleContains('Global'), 5000);

		var e = element(by.css('.favcompanies-list > li:nth-child(1) > a'));	  

	  console.log("sdfsdf")

		browser.executeScript("arguments[0].click();", e);

		browser.waitForAngularEnabled(false);

		var f= element(by.css('#close'));
		browser.ignoreSynchronization = true; 


		browser.executeScript("arguments[0].click();", f);

		element(by.css('ul#sidepulltest1>li')).click()

		f=element(by.css('#companyDropdown'));
		browser.executeScript("arguments[0].click();", f);

		f=element(by.partialLinkText('Add Configuration'));
		browser.executeScript("arguments[0].click();", f);



		browser.sleep(5000)


		f=element(by.model('user.name'));
		browser.executeScript("arguments[0].setAttribute('value', '" + "njfnjfnj" +"')", f);


		element(by.css('div.panel-heading:nth-child(3) > div:nth-child(1) > button:nth-child(1)')).click()


			var msg= element(by.css('.pgn-wrapper'));

			msg.getText().then(function(t){

				console.log(t);
	
		browser.wait(EC.textToBePresentInElement($('.pgn-wrapper'), 'Successfully Added'), 5000);
		
		browser.sleep(3000);
		
	
			})
			
			element(by.css('button.p-l-10:nth-child(9)')).click();
		
		browser.sleep(5000);
		browser.wait(EC.titleContains('List'), 10000);
		
		element(by.css('#example > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > input')).click();
				element(by.css('div.p-l-5:nth-child(1) > span:nth-child(2) > div:nth-child(1) > img:nth-child(1)')).click();
		element(by.css('#deleteSelections > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)')).click();
		
		msg.getText().then(function(t){

				console.log(t);
	browser.ignoreSynchronization = false; 
		browser.wait(EC.textToBePresentInElement($('.pgn-wrapper'), 'Successfully Deleted'), 5000);
		
		browser.sleep(3000);
		
	
			})
			
    

  });

})