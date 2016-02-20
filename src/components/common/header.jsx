"use strict";
var React = require('react');
import { Link } from 'react-router'

var Header = React.createClass({
  render: function() {
    return(
      <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Project name</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    {/* <li className="active"><a href="#">Home</a></li> */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/hero">Superheros</Link></li>
                  </ul>

                </div>
              </div>
            </nav>
    );
  }
})

module.exports = Header;
