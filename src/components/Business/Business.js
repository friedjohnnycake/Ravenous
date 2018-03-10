import React, { PureComponent } from 'react';
import './Business.css';

export default class Business extends PureComponent {
  render = () => (
    <div className="business">
      <div className="image-container">
        <img src={this.props.imageSrc} alt='' />
      </div>
      <h2>{this.props.name}</h2>
      <div className="business-information">
        <div className="business-address">
          <p>{this.props.address}</p>
          <p>{this.props.city}</p>
          <p>{this.props.state} {this.props.zipCode}</p>
        </div>
        <div className="business-reviews">
          <h3>{this.props.category}</h3>
          <h3 className="rating">{this.props.rating} stars</h3>
          <p>{this.props.reviewCount}</p>
        </div>
      </div>
    </div>
  )
}
