module.exports = {
	strlen: (str) => str.length,
	arrlen: (arr) => arr.length,
	len: (n) => n.length || -1,
	repeat: (str, num) => str.repeat(num),
	fillLeading0: (num, n0) => '0'.repeat(n0) + num,
	indexOf: (search, array) => array.indexOf(search),
}
