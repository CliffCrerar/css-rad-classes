/**
 * This function simply creates an absolute path from a files current directory and extends it
 * with whatever arguments are passed to it
 */

const path = require('path');
module.exports = (...localPaths) => {
	let newPath = process.env.PWD.concat(path.sep); // eslint-disable-line no-undef
	for (let i = 0; i < localPaths.length; i++) {
		newPath += localPaths[i].concat(path.sep);
	}
	return path.resolve(newPath);
}
