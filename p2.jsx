import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

import Header from './components/header/header';
import States from './components/states/States';

ReactDOM.render(
  <Header/>,
  document.getElementById('header'),
);

ReactDOM.render(
  <States />,
  document.getElementById('reactapp'),
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles/main.css';

// import Header from './components/header/header';
// import Example from './components/example/Example';

// ReactDOM.render(
//   <Header/>,
//   document.getElementById('header'),
// );

// ReactDOM.render(
//   <Example />,
//   document.getElementById('reactapp'),
// );



