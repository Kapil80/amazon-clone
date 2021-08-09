import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{BrowserRouter as Router} from 'react-router-dom';
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <Router>
      <App />
    </Router>
    </StateProvider>
    
  </React.StrictMode>,
  
  document.getElementById('root')
);


reportWebVitals();
