'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var core = require('@material-ui/core');
var React = _interopDefault(require('react'));

function App() {
  return React.createElement(
    "div",
    {},
    "@material-ui/core has ",
    Object.keys(core.colors),
    " colors."
  );
}

module.exports = App;
