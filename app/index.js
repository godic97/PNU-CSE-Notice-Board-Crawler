const Parser = require('rss-parser');
const Express = require('express');
const Logger = require('morgan');
const BodyParser = require('body-parser');

const apiRouter = Express.Router();
const parser = new Parser()
let app = new Express();
app.use('/api', apiRouter);

app.use(Logger('dev',{}));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({
	extended: true
}));

apiRouter.post('/cseNoticeParser', function(req,res){
	(async () => {
		let feed = await parser.parseURL('http://cse.pusan.ac.kr/bbs/cse/2605/rssList.do?row=5');
		//var blocks = new Array();
		var blocks = new Object();
		blocks.version = "1.0";
		var i = 0;
		
		//{
		//	"tile": "",
		//	"link": "",
		//	"pubDate": "",
		//	"author": "",
		//	"category": ""
		//};
		feed.items.forEach(item => {
			console.log(block);
			var block = new Object;
			block.title = item.title;
			block.link = item.link;
			block.pubDate = item.pubDate;
			block.author = item.author;
			block.categories = item. categories;
			blocks[i++] = block;
		});
		console.log(blocks);	
		var resJson = JSON.stringify(blocks);
		res.status(200).send(resJson);
		console.log(feed.title);
	})();
});

app.listen(3000, function() {
	console.log('skill server listening on port 3000');
});
app.get('/', (req, res)=>{
	res.send('Hello');
});
