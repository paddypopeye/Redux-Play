import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Postform />
            <br/>
            <Posts />
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">Learn React</a>
        </header>
      </div>
      </Provider>
    );
  }
}
export default App;