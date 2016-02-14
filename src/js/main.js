//entrypoint to the application
$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var aboutPage = require('../components/about/aboutPage.jsx');
var homePage = require('../components/home.jsx');
var Header = require('../components/common/header.jsx');
var Footer = require('../components/common/footer.jsx');

console.log('test?');
var App = React.createClass({
  render: function() {
    var Child;
    console.log('hoi');

    switch(this.props.route) {
      case 'about' : Child = aboutPage; break;
      default : Child = homePage;
    }

    return (<div className="container"><Child /></div>);
  }
});

function render() {
  console.log('wot');
  var route = window.location.hash.substr(1);
  ReactDOM.render(<Header/>, document.getElementById('header'));
  ReactDOM.render(<App route={route}/>, document.getElementById('content'));
  ReactDOM.render(<Footer/>, document.getElementById('footer'));
}

window.addEventListener('hashchange', render);
render();

// take the Home component and attach it to the app ID
// ReactDOM.render(<homePage />, document.getElementById('example'));
