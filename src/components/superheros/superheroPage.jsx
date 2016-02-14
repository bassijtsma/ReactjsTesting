"use strict";

var React = require('react');
var SuperheroApi = require('../../api/superheroApi.jsx');

var superheroPage = React.createClass({
  getInitialState: function () {
    return { superheros: [] };
  },
  componentWillMount: function() {
    this.setState({ superheros: SuperheroApi.getAllSuperheros() });
  },
  render: function() {

  var createSuperheroRow = function(hero) {
        return (
        <tr key={hero.id}>
          <td>{hero.firstName} {hero.lastName}</td>
          <td>{hero.superheroName}</td>
          <td><a href={"/#heros/" + hero.id}>{hero.id}</a></td>
        </tr>
      );
    }

    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Real Name</th>
            <th>Superhero Name</th>
            <th>Id</th>
            </tr>
        </thead>
        <tbody>
          {this.state.superheros.map(createSuperheroRow, this)}
        </tbody>
      </table>

    );
  }
})

module.exports = superheroPage;
