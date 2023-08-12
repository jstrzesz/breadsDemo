const React = require('react');
const Def = require('./layouts/Def');

function Index({ bakers, breads, title }) {
  return (
    <Def title={ title }>
      <h2>Index Page</h2>
      <h3>Bakers</h3>
      <ul>
        { bakers.map(baker => (
          <li key={ baker._id }>
            <a href={ `/bakers/${baker._id}`}>{ baker.name }</a>
          </li>
        ))}
      </ul>
      <div className='newButton'>
        <a href='/breads/new'><button>Add a new bread</button></a>
      </div>
      <ul>
        { breads.map(bread => {
          return (
            <li
              key={bread._id}
            >
              <a href={`/breads/${bread._id}`}>
                {bread.name}
              </a>
            </li>)
        })}
      </ul>
    </Def>
  )
};

module.exports = Index;
