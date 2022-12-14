module.exports = {
	removeSpace: (str) => this.replace(str, ' ', ''),
	removeLeading0: (str) => ['', ...str.split('0')].reduce((p, c) => p || c ? p + '0' + c : '').slice(1),
	revString: (str) => str.split('').reverse().join(''),
	replace: (str, findStr, withStr) => str.split(findStr).join(withStr),
	postAlign: (str, withStr, filler = '') => withStr.length - str.length < 0 ? str : str + filler.repeat(withStr.length - str.length),
	preAlign: (str, withStr, filler = '') => withStr.length - str.length < 0 ? str : filler.repeat(withStr.length - str.length) + str,
	split: (str, separator) => str.split(separator),
	join: (array, separator) => str.join(separator),
	concat: (...arr) => [].concat(...arr),
	revArray: (...ele) => ele.reverse(),
}
