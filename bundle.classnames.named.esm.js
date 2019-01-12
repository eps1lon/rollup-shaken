import { colors } from '@material-ui/core';
import React from 'react';

function App() {
  return React.createElement(
    "div",
    {},
    "@material-ui/core has ",
    Object.keys(colors),
    " colors."
  );
}

export default App;
