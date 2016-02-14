//entrypoint to the application
$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var aboutPage = require('../components/about/aboutPage');
var homePage = require('../components/home');

console.log('test?');
var App = React.createClass({
  render: function() {
    var Child;
    console.log('hoi');

    switch(this.props.route) {
      case 'about' : Child = aboutPage; break;
      default : Child = homePage;
    }

    return (<div> <Child/></div>);
  }
});


function render() {
  console.log('wot');
  var route = window.location.hash.substr(1);
  ReactDOM.render(<App route={route}/>, document.getElementById('example'));
}

window.addEventListener('hashchange', render);
render();

// take the Home component and attach it to the app ID
// ReactDOM.render(<homePage />, document.getElementById('example'));
