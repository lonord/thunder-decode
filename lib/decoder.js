module.exports = function decode(thunderUrl) {
	let content = thunderUrl.replace(/\n/g, '');
	if (content.indexOf('thunder://') === -1) {
		throw new Error('url format error');
	}
	content = content.substring(10, content.length);
	let result = Buffer.from(content, 'base64').toString('utf8');
	return result.substr(2, result.length - 4);
}