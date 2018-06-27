import React from 'react';
import { render } from 'react-dom';

import reducer from './reducer';
import { createStore } from 'redux';

import { Provider } from "react-redux";

import App from './App';

const store = createStore(reducer);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// store.dispatch({type: "PLUS", payload: {num: 1} });
// store.dispatch({ type: "PLUS", payload: { num: 5 } });
// store.dispatch({ type: "MINUS", payload: { num: 5 } });
// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
