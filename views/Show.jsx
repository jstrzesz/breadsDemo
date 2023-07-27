const React = require('react');
const Def = require('./layouts/Def');

function Show({ bread, index }) {
  return (
    <Def>
      <h3>{ bread.name }</h3>
      <p>
        and it
        { bread.hasGluten ? <span> does </span> : <span> does NOT </span> }
        have gluten.
      </p>
      <form action={`/breads/${index}?_method=DELETE`} method='POST' >
        <input type='submit' value='DELETE' />
      </form>
      <img src={ bread.image } alt={ bread.name } />
    </Def>
  )
};

module.exports = Show;
