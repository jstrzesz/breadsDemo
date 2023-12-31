const React = require('react');
const Def = require('./layouts/Def');

function Edit({ bakers, bread }) {
  return (
    <Def>
      <h2>Edit a bread</h2>
      <form action={`/breads/${bread.id}?_method=PUT`} method='POST'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          required
          defaultValue={ bread.name }
        />
        <label htmlFor='image'>Image</label>
        <input
          type='text'
          name='image'
          id='image'
          defaultValue={ bread.image }
        />
        <label htmlFor='hasGluten'>Has Gluten?</label>
        <input
          type='checkbox'
          name='hasGluten'
          id='hasGluten'
          defaultChecked
        />
        <label htmlFor='baker'>Baker Name</label>
          <select name='baker' id='baker' defaultValue={ bread.baker }>
          { bakers.map(baker => (
              <option value={ baker.id } key={ baker.id }>{ baker.name }</option>
            ))}
          </select>
        <br />
        <input type='submit' />
      </form>
    </Def>
  )
};

module.exports = Edit;
