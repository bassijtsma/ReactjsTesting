//entrypoint to the application
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router')
var routes = require('./routes')

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('content'));
})
