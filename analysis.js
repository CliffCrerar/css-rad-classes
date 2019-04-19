/* eslint-disable no-console */
/* eslint-disable no-undef */
/*
 * Copyright (c) 2019  Infinity Arc
 */

const fs = require('fs');
const path = require('path');
//const P = require('./tools/pathJoiner');
const sass = require('node-sass');

//const scssSubject = require(P('./bsscssfiles/bootstrap.scss'));
//console.log('scssSubject: ', scssSubject);

sass.render({
	file: './bsscssfiles/bootstrap.scss'
}, (err, results) => {

	if (err) { console.log(err); return }
	console.log('results: ', results);
	//console.log('results: ', results.css.toString());
	console.log('results: ', results.data);
	console.log('results: ', results.map.toString);
	console.log('sass.types: ', sass.types);
	console.log('sass.types: ', sass.types.Map());
	console.log('sass.types: ', sass.types.List());
	console.log();
})

console.log();
