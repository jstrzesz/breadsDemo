const React = require('react');
const Def = require('./layouts/Def');

function New() {
  return (
    <Def>
      <h2>Add a new bread</h2>
      <div className='backButton'>
        <a href='/breads'><button>Go back to the Index</button></a>
      </div>
        <form action='/breads' method='POST'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"/>
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked
          />
          <br />
          <input type="submit"/>
        </form>
    </Def>
  )
};

module.exports = New;
