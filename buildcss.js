/**
 * BUILD BOOTSTRAP UTILS
 * @summary short description for the file
 * @author Infnity Arc Devs
 * Created at     : 2019-02-09 15:52:28
 * Last modified  : 2019-02-09 20:24:23
 */

var fs = require('fs');
var path = require('path');
var cp = require('child_process');
var source = path.join(__dirname, 'bsscssfiles/bootstrap.scss');
var dest = path.join(__dirname, 'cssout/bs4utils.css');
var miniCSS = require("mini-css");
cp.exec(`sass ${source} ${dest}`, () => {
	var cssfile = fs.readFileSync(dest, 'utf8').split(/\n/);
	cssfile.splice(0, 7);
	//console.log('cssfile: ', cssfile.join('\n'));
	//console.log('cssfile: ', cssfile);
	fs.writeFileSync(path.join(__dirname, 'dist/cssradutils.css'), miniCSS(cssfile.join('\n')));
});

