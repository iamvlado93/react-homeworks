import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import SquareComponent from './components/square';
import ItalicComponent from './components/italicText';
import SpinnerComponent from './components/spinner';
import SpinnerComponentProps from './components/spinnerProps';
import ActiveSpinnerComponent from './components/spinnerActive';
import SignInFormComponent from './components/sigInForm';
import JSONCycleComponent from './components/jsonCycle';
import DropdownComponent from './components/dropdownList';
import TrackButtonComponent from './components/trackButton/trackButton';
import LoginComponent from './components/loginForm';
import ToDoComponent from './components/toDoList/todoList';
import CounterComponent from './components/counter';
import TextComponent from './components/textFonts';
import SignUpFormComponent from './components/signUpForm/signUpForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/ItalicComponent">Italic Component</Link>
            </li>
            <li>
              <Link to="/SquareComponent">Square Component</Link>
            </li>
            <li>
              <Link to="/CounterComponent">Counter Component</Link>
            </li>
            <li>
              <Link to="/ActiveSpinnerComponent">Active Spinner Component</Link>
            </li>
            <li>
              <Link to="/SpinnerComponent">Spinner Component</Link>
            </li>
            <li>
              <Link to="/TextComponent">Text Component</Link>
            </li>
            <li>
              <Link to="/DropdownComponent">Dropdown Component</Link>
            </li>

            <li>
              <Link to="/SignInFormComponent">Sign In Form Component</Link>
            </li>

            <li>
              <Link to="/LoginComponent">Login Component</Link>
            </li>

            <li>
              <Link to="/JSONCycleComponent">JSON Cycle Component</Link>
            </li>

            <li>
              <Link to="/TrackButtonComponent">Track Button Component</Link>
            </li>

            <li>
              <Link to="/ToDoComponent">To Do Component</Link>
            </li>
            <li>
              <Link to="/SignUpFormComponent">Sign Up Form</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route path="/ItalicComponent">
          <ItalicComponent />
          </Route>

          <Route path="/SquareComponent">
          <SquareComponent />
          </Route>

          <Route path="/CounterComponent">
          <CounterComponent default={0} />
          </Route>

          <Route path="/ActiveSpinnerComponent">
          <ActiveSpinnerComponent />
          </Route>

          <Route path="/SpinnerComponent">
          <SpinnerComponent />
          </Route>

          <Route path="/TextComponent">
          <TextComponent />
          </Route>

          <Route path="/DropdownComponent">
          <DropdownComponent />
          </Route>

          <Route path="/SignInFormComponent">
          <SignInFormComponent />
          </Route>

          <Route path="/LoginComponent">
          <LoginComponent />
          </Route>

          <Route path="/JSONCycleComponent">
          <JSONCycleComponent />
          </Route>

          <Route path="/TrackButtonComponent">
          <TrackButtonComponent />
          </Route>

          <Route path="/ToDoComponent">
          <ToDoComponent />
          </Route>

          <Route path="/SignUpFormComponent">
          <SignUpFormComponent />
          </Route>
        </Switch>
    </Router>
  );
}

function Italic() {
  return <ItalicComponent />;
}

function Square() {
  return (
  <SquareComponent label='Big square' cssClass='big-square' />,
  <SquareComponent label='Medium square' cssClass='medium-square' />,
  <SquareComponent label='Small square' cssClass='small-square' />
  );
}

function Counter() {
  return <CounterComponent />;
}

function ActiveSpinner() {
  return <ActiveSpinnerComponent />;
}

function Spinner() {
  return <SpinnerComponent />;
}

function Text() {
  return <TextComponent />;
}

function Dropdown() {
  return <DropdownComponent />;
}

function SignInForm() {
  return <SignInFormComponent />;
}

function LoginForm() {
  return <LoginComponent />;
}

function JSONCycle() {
  return <JSONCycleComponent />;
}

function TrackButton() {
  return <TrackButtonComponent />
}

function ToDo() {
  return <ToDoComponent />
}

function SignUp() {
  return <SignUpFormComponent />
}


