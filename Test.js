
/*A file containing test cases.The url,image Selector and query selector are  passed as parameters to 
the function SearchSoldOut();identified by Search.The function SearchSoldOut is imported here.
As the web pages pertaining each of the websites change dynamically after a few minutes, the below 
may also not work.On changing the Selectors , it works .
*/

var tools = require("./outOfStockSearch.js");

//Working test Case for Sold out products on myntra.
tools.data.Search('https://www.myntra.com/women-shorts-skirts',
                  '#desktopSearchResults > div:nth-child(2) > section > ul > li:nth-child(2) > a > img',
	              '#sizeButtonsContainer > div.size-buttons-recoContainer > div > div > span > span:nth-child(1)',
                  'Size out of stock?'
                    );

//Working test case for available products on myntra.
tools.data.Search('https://www.myntra.com/women-shorts-skirts',
	'#desktopSearchResults > div:nth-child(2) > section > ul > li:nth-child(3) > a > img',
	'#sizeButtonsContainer > div.size-buttons-recoContainer.size-buttons-hide > div',
	'Size out of stock?');

/*tools.data.Search('https://www.flipkart.com/search?q=redmi%20note%205%20pro&sid=tyy/4io&as=on&as-show=on&marketplace=FLIPKART&otracker=start&as-pos=1_1_ic_redmi%20note%205%20pro',
	'#container > div > div:nth-child(2) > div > div._3e7xtJ > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(1) > div.u6Ux6y > div._1-WJZn > a > div._2hJpKs > div',
	'#container > div > div:nth-child(2) > div > div > div > div._1GRhLX._3N5d1n > div > div._2Cl4hZ > div.RIBRtX > div',
	'Coming Soon');*/