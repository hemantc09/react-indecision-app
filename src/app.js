
import React from 'react';
import ReactDOM from 'react-dom';
import IndecesionApp from './components/IndecesionApp'
//import normalize  css to render same style across all browsers
//.e.g. same output on IE, Safari, FF .:. we use normalize.css
import 'normalize.css/normalize.css';
//load the css file
import './styles/styles.scss';
//const pot = process.env.PORT || 3000;

ReactDOM.render(<IndecesionApp />,document.getElementById('app'));

// app.listen(port,() =>{
//     console.log("server is up");
// });