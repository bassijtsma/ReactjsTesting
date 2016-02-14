"use strict";

var React = require('react');
var SuperheroApi = require('../../api/superheroApi.jsx');
var SuperheroList = require('./superheroList.jsx');

var superheroPage = React.createClass({

  getInitialState: function () {
    return { superheros: [] };
  },
  componentDidMount: function() {
    if (this.isMounted()) {
      this.setState({ superheros: SuperheroApi.getAllSuperheros() });
  } else {
    console.log('superheropage component did not mount!');
    }
  },
  render: function() {
    return (
    <div>
      <h1>list of superheros:</h1>
      <SuperheroList superheros={this.state.superheros}/>
    </div>
  );
  }
});

module.exports = superheroPage;
