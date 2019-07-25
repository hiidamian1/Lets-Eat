import React from 'react';
import ResultImage from "./ResultImage";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import '../App.css';

class Result extends React.Component {
  render() {
    let stars = [];
    if (this.props.restaurant.rating) {
      for (let i = 0; i < 5; i++) {
        if (i < this.props.restaurant.rating) { 
          stars.push(<FontAwesomeIcon icon={solidStar}/>);
        } else {
          stars.push(<FontAwesomeIcon icon={regularStar}/>);
        }
      }
    } else {
      stars.push("No rating information available :(");
    }

    let price = [];

    if (this.props.restaurant.price) {
      for (let i = 0; i < this.props.restaurant.price.length; i++) {
        price.push(<FontAwesomeIcon icon={faDollarSign}/>)
      }
    } else {
      price.push("No pricing information available :(");
    }

    let address = "";

    if (this.props.restaurant.location.display_address) {
      const display_address = this.props.restaurant.location.display_address;
      for (let i = 0; i < display_address.length - 1; i++) {
        address += display_address[i] + ", ";
      }
      address += display_address[display_address.length - 1];
    } else {
      address = "No location information available :(";
    }

    let directions = `https://www.google.com/maps/search/?api=1&query=${this.props.restaurant.coordinates.latitude},${this.props.restaurant.coordinates.longitude}`;

    return (
      <div className="card result-root">
        <ResultImage image={this.props.restaurant.image_url}/>
        <div className="card-body">
          <div className="result-header">
            <a href={this.props.restaurant.url} className="result-restaurant-name" target="_blank" rel="noopener noreferrer">
              {this.props.restaurant.name}
            </a>

            <div className="result-stars">
              {stars}
            </div>
            <div className="result-price">
              {price}
            </div>
            
            <a href={directions} className="result-address" target="_blank">
              {address}
            </a>

            {this.props.userLocation.latitude && <div>{this.props.userLocation.latitude + " " + this.props.userLocation.longitude}</div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Result;