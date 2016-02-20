//entrypoint to the application
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router')

import { browserHistory, hashHistory } from 'react-router'
var routes = require('./routes');
import { render } from 'react-dom'


var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;


{/* var routes = require('./routes')
Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('content'));
})
*/}

console.log(browserHistory);

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('content')
);
