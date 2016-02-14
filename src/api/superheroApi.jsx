"use strict";

//This file is mocking a web API by hitting hard coded data.
// Thanks to Cory House for mock API code https://github.com/coryhouse
var superheros = require('./superheroData').superheros;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(hero) {
	return superheros.firstName.toLowerCase() + '-' + superheros.lastName.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var SuperheroApi = {
	getAllSuperheros: function() {
		return _clone(superheros);
	},

	getSuperheroById: function(id) {
		var hero = _.find(superheros, {id: id});
		return _clone(hero);
	},

	saveHero: function(hero) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the superhero to the DB via AJAX call...');

		if (hero.id) {
			var existingAuthorIndex = _.indexOf(superheros, _.find(superheros, {id: hero.id}));
			superheros.splice(existingAuthorIndex, 1, hero);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new superheros in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			hero.id = _generateId(hero);
			superheros.push(hero);
		}

		return _clone(hero);
	},

	deleteHero: function(id) {
		console.log('Pretend this just deleted the hero from the DB via an AJAX call...');
		_.remove(superheros, { id: id});
	}
};

module.exports = SuperheroApi;
