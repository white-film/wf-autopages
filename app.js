'use strict';

var Autopages = require('autopages');

var autopages = new Autopages(process.env.GITHUB_KEY);

autopages.registerRepo('white-film/white-film.github.io');
