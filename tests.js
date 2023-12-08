const { jsver } = require(`${__dirname}/index.js`);
if (typeof jsver()[0]!='number') {
	console.log(`[tests] jsver() don't return[]#1 <Integer>Version`);
} else if (typeof jsver()[1]!='number') {
	console.log(`[tests] jsver() don't return[]#2 <Integer>Year`);
} else if (typeof jsver()[2]!='string') {
	console.log(`[tests] jsver() don't return[]#3 <String>Standard`);
}