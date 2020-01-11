//RSS parser
let Parser = require('rss-parser');
let parser = new Parser();

(async() => {
	let feed = await parser.parseURL('http://cse.pusan.ac.kr/bbs/cse/2605/rssList.do?row=5');
	console.log(feed.title);

	feed.items.forEach(item => {
		console.log(item.title +':' + item.link);
	});
})();
