import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component() {

  state  = {
    currentPage: 'home'
  }

  renderPage = () => {
    switch (this.state.currentPage) {
      case 'home' : {
        return <PageHome/>
      }
      case 'about' : {
        return <PageAbout/>
      }
      case 'contacts' : {
        return <PageContacts/>
      }
    }
  } 

  goHome = () => {
    this.setState({ currentPage: 'home'});
  }
  goToContacts = () => {
    this.setState({ currentPage: 'contacts'});
  }
  goToAbout = () => {
    this.setState({ currentPage: 'about'});
  }

  goToRoute = (nextRoute) => {
    this.setState({ currentPage: nextRoute});
  }

  render () {
    return (
      <div>
        <button onClick={() => this.goToRoute('home')}>Home</button>
        <button onClick={() => this.goToRoute('about')}>About</button>
        <button onClick={() => this.goToRoute('contacts')}>Contacts</button>
        {this.renderPage()}
      </div>
    )
  }
}

const PageAbout = () => {
  return<div>About</div>
}

const PageHome = () => {
  return<div>Home</div>
}

const PageContacts = () => {
  return<div>Contacts</div>
}

export default App;
