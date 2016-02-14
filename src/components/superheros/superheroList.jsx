"use strict";

var React = require('react');

var SuperheroList = React.createClass({
  render : function() {

    console.log('props');
    console.log(this.props);
    console.log('state:')
    console.log(this.state);
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
            {this.props.superheros.map(createSuperheroRow, this)}
          </tbody>
        </table>
      );
    }
  }
);

module.exports = SuperheroList;
