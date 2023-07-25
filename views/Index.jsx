const React = require('react');
const Def = require('./layouts/Def');

function Index({ breads, title }) {
  return (
    <Def title={ title }>
      <h2>Index Page</h2>
      { /* This is a JSX comment. */}
      {/* <p>I have { breads[0].name } bread!</p> */}
      <div className='newButton'>
        <a href='/breads/new'><button>Add a new bread</button></a>
      </div>
      <ul>
        { breads.map((bread, index) => {
          return (
            <li
              key={index}
            >
              <a href={`/breads/${index}`}>
                {bread.name}
              </a>
            </li>)
        })}
      </ul>
    </Def>
  )
};

module.exports = Index;
