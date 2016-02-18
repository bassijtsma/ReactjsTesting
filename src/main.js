//entrypoint to the application
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router')

var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

{/* var routes = require('./routes')
Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('content'));
})
*/}

var homePage = require('./components/home.jsx')
var App = require('./components/App');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={homePage}>
      <IndexRoute component={homePage}></IndexRoute>
    </Route>
  </Router>,
  App
);
