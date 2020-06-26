import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import ArticleList from './components/ArticleList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <ArticleList />
        {/* <SearchResults /> */}
      </div>
    );
  }

}

export default App;
