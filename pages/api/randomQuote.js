import allQuotes from '../../quotes.json';

export default (req, res) => {
	const { author } = req.query; // 获取请求参数
	let quotes = allQuotes;
	// 如果指定作者，则找出该作者的所有条目
	if (author) {
		quotes = quotes.filter(quote =>
			quote.author.toLowerCase().includes(author.toLowerCase())
		);
	}

	// 如果没有指定作者，或没找到指定作者的条目，则找出未知作者的条目
	if (!quotes.length) {
		quotes = allQuotes.filter(
			quote => quote.author.toLowerCase() === 'unknown'
		);
	}

	const quote = quotes[Math.floor(Math.random() * quotes.length)];
	res.status(200).json(quote);
};
