/*eslint-disable strict */
$ = jQuery = require('jquery');
var React = require('react');
var Header = require('./common/header.jsx');
var Footer = require('./common/footer.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;
