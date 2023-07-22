const React = require('react');

function Default(html) {
  return (
    <htmL>
      <head>
        <title>{ html.title || 'Default' }</title>
      </head>
      <body>
        <h1>HTML Rendered!</h1>
        <div className='container'>
          { html.children }
        </div>
      </body>
    </htmL>
  )
};

module.exports = Default;