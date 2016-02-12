//entrypoint to the application
$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/home')

// take the Home component and attach it to the app ID
React.render(<Home />, document.getElementById('example'));
