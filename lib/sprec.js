module.exports = {
	removeSpace: (str) => this.replace(str, ' ', ''),
	removeLeading0: (str) => ['', ...str.split('0')].reduce((p, c) => p || c ? p + '0' + c : '').slice(1),
	revString: (str) => str.split('').reverse().join(''),
	replace: (str, findStr, withStr) => str.split(findStr).join(withStr),
}
