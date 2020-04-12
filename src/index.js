import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from './Button.treat';

function App() {
  return (
    <button className={Button}>Like</button>
  );
}

ReactDOM.render(<App/>,
  document.querySelector('#root'));
