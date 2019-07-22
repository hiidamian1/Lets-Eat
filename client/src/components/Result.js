import React from 'react';
import ResultImage from "./ResultImage";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import '../App.css';

class Result extends React.Component {
  render() {
      let stars = [];
      for (let i = 0; i < 5; i++) {
        if (i < this.props.restaurant.rating) { 
          stars.push(<FontAwesomeIcon icon={solidStar}/>);
        } else {
          stars.push(<FontAwesomeIcon icon={regularStar}/>);
        }
      }

      return (
      <div className="card result-root">
        <ResultImage image={this.props.restaurant.image_url}/>
        <div className="card-body">
          <div className="result-header">
            <a href={this.props.restaurant.url} target="_blank" className="result-restaurant-name">
              {this.props.restaurant.name}
            </a>
            <div className="result-stars">
              {stars}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;