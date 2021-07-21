import React, { Component } from 'react';
class Card extends Component {
  state = {};
  render() {
    const { continent, name, population, type } = this.props.data;
    return (
      <div className="card">
        <div className="card-body">
          <h5 class="card-title">Pavadinimas</h5> <span>{name}</span>
          <h5 class="card-title">Zemynas</h5> <span>{continent}</span>
          <h5 class="card-title">Gyventoju skaicius</h5>{' '}
          <span>{population}</span>
          <h5 class="card-title">Tipas</h5> <span>{type}</span>
        </div>
      </div>
    );
  }
}

export default Card;
