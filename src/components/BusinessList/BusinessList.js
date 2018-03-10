import React, { PureComponent } from 'react';
import "./BusinessList.css";
import Business from "../Business/Business.js"

export default class BusinessList extends PureComponent {
  render = () => (
    <div className="business-list">
      {this.props.businesses.map(business => <Business key={business.id} {...business} />)}
    </div>
  )
}
