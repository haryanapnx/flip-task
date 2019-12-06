import React from 'react';
import ReactDOM from 'react-dom';
import Transaction from 'Features';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Transaction />, div);
  ReactDOM.unmountComponentAtNode(div);
});
