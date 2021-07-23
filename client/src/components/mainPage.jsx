import React, { Component } from 'react';
import Card from './card';

class MainPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="cards-title">Card list</div>
        <div className="filter-container">
          <span className="filter-title">Choose Cities or Countries</span>
          <select
            value={this.props.passCountryOrTown}
            onChange={this.props.passHandleCountriesOrTowns}
          >
            <option value="All">All</option>
            <option value="Country">Country</option>
            <option value="City">City</option>
          </select>
        </div>
        <div className="card-container">
          {this.props.passData.length > 0 &&
            this.props.passData.map((d) => (
              <Card onRefresh={this.props.onRefresh} key={d._id} data={d} />
            ))}
        </div>
      </div>
    );
  }
}

export default MainPage;
