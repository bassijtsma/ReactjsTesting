//entrypoint to the application
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router')
import { browserHistory, hashHistory } from 'react-router'
import { render } from 'react-dom'

var routes = require('./routes');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('content')
);
