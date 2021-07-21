import React, { Component } from 'react';
class Card extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 class="card-title">Pavadinimas</h5> <span>Spain</span>
          <h5 class="card-title">Zemynas</h5> <span>Europe</span>
          <h5 class="card-title">Gyventoju skaicius</h5> <span>1mil</span>
          <h5 class="card-title">Tipas</h5> <span>miestas</span>
        </div>
      </div>
    );
  }
}

export default Card;
