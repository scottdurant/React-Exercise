import React, { Component } from 'react';

import './App.css';

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <SearchResults />
      </div>
    );
  }

}

export default App;
