 
 //Defines a method to scrape the webpage using puppeteer and find 'Out of Stock'or equivalent string.
 /*
 Puppeteer is a software used for automation of browser and testing purposes.
 The async function is used to actually implement utilities provided by puppeteer 
 using the latest version of Google Chrome (version 8)and Node js.The async returns an object called Promise.
 Depending on the state of this object Promise ie. resolved or rejected ,the query is processed.To make these
 promise values and related errors visible on the command prompt the process.on is used.
 This program navigates to the given url and selects the appropriate image depending on the selector to the image provided.
 The evaluate() function actually scrapes the webpage and uses DOM queries like document.selectquery() to select the selector
 or identifier relating to the element to be found.The .innerText extension selects the equivalent text of'Out of Stock'
 or similar strings.It returns 'Sold Out' in case of product unavailability and 'Available' otherwise.*/

var methods =
{
		Search:function SearchSoldOut (url,selector,qSelector,outOfStockText)
	{

		//Declaration to invoke puppeteer to use.
			const puppeteer = require('puppeteer');

		// application specific logging, throwing an error, or other logic here
			process.on('unhandledRejection', (reason, p) => {
		  	console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
		});

		//Function which is actually used to use the browser and puppeteer.
			let scrape = async () => {

		/*Opens a new browser automatically without actually opening one.If headless is set to false one can actually see 
		the automatic working of the browser and navigation.*/
				const browser = await puppeteer.launch({headless:true});

		// application specific logging, throwing an error, or other logic here
				process.on('unhandledRejection', (reason, p) => {
				  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
				});

		//Opens a new page in the opened browser.
				const page = await browser.newPage();
		//Testing purpose to check if the navigation is happening the correct way.
				page.on('console',ConsoleMessage => console.log(ConsoleMessage._text));

		//Navigates to the required url.
				await page.goto(url);

		//Clicks the image for the desired product whose selector is provided.
				await page.click(selector);

		//Waits till the Query selector for the given image is selector. 
				await page.waitForSelector(qSelector);

		//Function that actually performs scrapping.
			const result = await page.evaluate((qSelector,outOfStockText) => {

			//Printing the value of the query selector to see what it contains.Testing purpose.	
			       console.log("qSelector" + qSelector);       
					let soldOutLabel = document.querySelector(qSelector);
					console.log('soldOutLabel',soldOutLabel);
			/*Checks if the inner text contains 'out of stock'or equivalent string and 
			returns 'Sold Out' if it matches any of its equivalent form.*/
					if(soldOutLabel != null) {
						let outOfStock1= soldOutLabel.innerText;
						console.log('soldOutLabel innerText',soldOutLabel.innerText);
						if(outOfStock1==outOfStockText)
							outOfStock1="Sold Out";
			     		else
			     			outOfStock1="Available";
					return outOfStock1;
					}
					else
					{
						let outOfStock2="Available";
					return outOfStock2; 
					}
			}, qSelector,outOfStockText);

		browser.close();
		return result;
		}

	scrape().then((value) => {
			
		console.log(value);

		});
	}
};

exports.data = methods;

