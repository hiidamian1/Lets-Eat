import React from 'react';
import './App.css';
import test from "./test";

import Search from "./components/Search";
import Result from "./components/Result";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurant: {}
    }
  }

  findRestaurant(e) {
    e.preventDefault();

    this.setState({restaurant: test[Math.floor(Math.random() * test.length)]});
  }

  render() {
    this.findRestaurant = this.findRestaurant.bind(this);

    return (
      <div className="app-root">
        <div className="app-header">
          <h1 className="app-title">Let's Eat!</h1>
          <h3 className="app-description">Can't decide where? Let us choose for you.</h3>
        </div>
        <Search findRestaurant={this.findRestaurant}/>
        <Result restaurant={this.state.restaurant}/>
      </div>
    );
  }
}

export default App;
