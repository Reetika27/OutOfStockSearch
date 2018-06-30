
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

