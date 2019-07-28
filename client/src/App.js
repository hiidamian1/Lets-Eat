import React from 'react';
import './App.css';
import test from "./test";

import Search from "./components/Search";
import Result from "./components/Result";
import LocationAlert from "./components/LocationAlert";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: {},
      userLocationStatus: -1,
      userDetectedCoords: false, // will be truthy if user is geolocated
      userManualLocation: false, // will be truthy if user manually enters location
      searchTerms: "",
      radius: 0, // possible values 5, 15, 25. otherwise do not include
      price: 0 // possible values 1, 2, 3, 4. otherwise do not include
    }
  }

  findRestaurant(e) {
    e.preventDefault();

    this.setState({result: test[Math.floor(Math.random() * test.length)]});
  }

  handleLocation(e) {
    e.preventDefault();

    if (navigator.geolocation) {

      function success(position) {
        console.log("Position found!"); //alert or flash message

        this.setState({userLocationStatus: 1, userDetectedCoords: position.coords});
      }

      success = success.bind(this);

      function error() {
        this.setState({userLocationStatus: 0, userDetectedCoords: {}});

        console.log("Could not locate position"); //alert or flash message
      }

      error = error.bind(this);

      const options = {
        timeout: 5000,
      };

      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      console.log("could not access location")
    }
  }

  render() {
    this.findRestaurant = this.findRestaurant.bind(this);
    this.handleLocation = this.handleLocation.bind(this);

    return (
      <div className="app-root container-fluid">
        <div className="app-content col-md-9 col-lg-6">
          <div className="app-header">
            <h1 className="app-title">Let's Eat!</h1>
            <h3 className="app-description">Can't decide where? Let us choose for you.</h3>
          </div>
          
          {this.state.userLocationStatus > -1 && <LocationAlert status={this.state.userLocationStatus}/>}

          <Search findRestaurant={this.findRestaurant} handleLocation={this.handleLocation}/>
          {this.state.result.id && <Result restaurant={this.state.result} userDetectedCoords={this.state.userDetectedCoords} userManualLocation={this.state.userManualLocation}/>}
        </div>
      </div>
    );
  }
}

export default App;
