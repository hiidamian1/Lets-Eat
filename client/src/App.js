import React from 'react';
import './App.css';

import Search from "./components/Search";

class App extends React.Component {
  render() {
      return (
      <div className="app-root">
        <div className="app-header">
          <h1 className="app-title">Let's Eat!</h1>
          <h3 className="app-description">Can't decide where to eat? Let us choose for you.</h3>
        </div>
        <Search/>
      </div>
    );
  }
}

export default App;
