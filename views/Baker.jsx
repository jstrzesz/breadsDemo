const React = require('react');
const Def = require('./layouts/Def');

function Baker({ baker }) {
  return (
    <Def>
      <h3>{ baker.name }</h3>
      <p>{ baker.name } has been baking with us since { baker.startDate.getFullYear() }</p>
      <p>About { baker.name }: { baker.bio }</p>
      <h3>Breads { baker.name } has baked</h3>
      <ul>
        { baker.breads.map(bread => (
          <li key={ bread.id }>
            { bread.name }
          </li>
        ))}
      </ul>
      <form action={ `/bakers/${baker.id}?_method=DELETE` } method='POST'>
        <input type='submit' value='Delete' />
      </form>
    </Def>
  )
};

module.exports = Baker;
