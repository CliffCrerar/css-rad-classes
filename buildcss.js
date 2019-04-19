/* eslint-disable no-undef */
/**
 * BUILD BOOTSTRAP UTILS
 * @summary short description for the file
 * @author Infinity Arc Devs
 * Created at     : 2019-02-09 15:52:28
 * Last modified  : 2019-02-11 01:51:44
 */

var fs = require('fs');
var path = require('path');
var cp = require('child_process');
var source = path.join(__dirname, 'bsscssfiles/bootstrapcustom.scss');
console.log('source: ', source);
var dest = path.join(__dirname, 'cssout/bs4utils.css');

console.log('dest: ', dest);
var miniCSS = require('mini-css');

cp.exec(`sass ${source} ${dest}`, (err, stdOut, stdErr) => {
	if (err) {
		console.error('ERROR:', stdErr, stdOut);
		return;
	}

	console.log('BUILT NEW CSS FILE', stdOut, stdErr)

	//fs.existsSync(dest)
	var cssfile = fs.readFileSync(dest, 'utf8').split(/\n/);
	//cssfile.splice(0, 7);
	//console.log('cssfile: ', cssfile.join('\n'));
	//console.log('cssfile: ', cssfile);
	fs.copyFileSync(dest, path.join(__dirname, 'dist/cssradutils.css'));
	fs.copyFileSync(dest + '.map', path.join(__dirname, 'dist/cssradutils.css.map'));
	fs.writeFileSync(
		path.join(__dirname, 'dist/cssradutils.min.css'),
		miniCSS(cssfile.join('\n'))
	);
});
//}
