"use strict";

var React = require('react');
import { browserHistory } from 'react-router';

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;


var App = require('./components/app');
var HomePage = require('./components/homePage.jsx');
var AboutPage = require('./components/about/aboutPage.jsx');
var SuperheroPage = require('./components/superheros/superheroPage.jsx')

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/about" component={AboutPage} />
    <Route path="/hero" component={SuperheroPage} />
  </Route>
)
