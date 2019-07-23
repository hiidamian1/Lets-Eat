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

    console.log(this.state.restaurant);

    return (
      <div className="app-root container-fluid">
        <div className="app-content col-md-9 col-lg-6">
          <div className="app-header">
            <h1 className="app-title">Let's Eat!</h1>
            <h3 className="app-description">Can't decide where? Let us choose for you.</h3>
          </div>
          <Search findRestaurant={this.findRestaurant}/>
          {this.state.restaurant.id && <Result restaurant={this.state.restaurant}/>}
        </div>
      </div>
    );
  }
}

export default App;
