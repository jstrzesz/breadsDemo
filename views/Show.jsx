const React = require('react');
const Def = require('./layouts/Def');

function Show({ bread }) {
  return (
    <Def>
      <h3>{ bread.name }</h3>
      <p>
        and it
        { bread.hasGluten ? <span> does </span> : <span> does NOT </span> }
        have gluten.
      </p>
      <img src={ bread.image } alt={ bread.name } />
    </Def>
  )
};

module.exports = Show;
