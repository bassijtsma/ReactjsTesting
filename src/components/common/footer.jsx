"use strict";

var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="footer">
      <div className="container">
        <span className="text-muted">Some footer text</span>
      </div>
    </footer>

  );
  }
})

module.exports = Footer;
