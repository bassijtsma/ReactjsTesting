"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/home.jsx')} />
    <Route name="superheros" handler={require('./components/superheros/superheroPage.jsx')} />
    <Route name="about" handler={require('./components/about/aboutPage.jsx')} />
    <Route name="test" />
  </Route>
)
