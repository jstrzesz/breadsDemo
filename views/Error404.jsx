const React = require('react');
const Def = require('./layouts/Def');

function Error404() {
  return (
    <Def>
      <h1>404: Bread doesn't exist</h1>
    </Def>
  )
};

module.exports = Error404;
