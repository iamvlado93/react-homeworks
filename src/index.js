import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// hw-1
import SquareComponent from './components/square';
import ItalicComponent from './components/italicText';
// hw-2
import SpinnerComponent from './components/spinner';
import SpinnerComponentProps from './components/spinnerProps';
import ActiveSpinnerComponent from './components/spinnerActive';
import SignInFormComponent from './components/sigInForm';
import JSONCycleComponent from './components/jsonCycle';
import DropdownComponent from './components/dropdownList';
import TrackButton from './components/dropdownList';
import LoginComponent from './components/loginForm';

ReactDOM.render(
  <React.StrictMode>
    {/* <SquareComponent label='Big square' cssClass='big-square' /> 
    <SquareComponent label='Medium square' cssClass='medium-square' />
    <SquareComponent label='Small square' cssClass='small-square' /> */}
    {/* <ItalicComponent /> */}
    {/* <SpinnerComponent /> */}
    {/* <SpinnerComponentProps /> */}
    {/* <ActiveSpinnerComponent /> */}
    {/* <SignInFormComponent /> */}
    {/* <JSONCycleComponent /> */}
    {/* <DropdownComponent /> */}
    {/* <TrackButton /> */}
    {/* <LoginComponent /> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
