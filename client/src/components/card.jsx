import React, { Component } from 'react';
import axios from 'axios';
class Card extends Component {
  state = {};
  handleDelete = (id) => {
    console.log('delete', id);
    try {
      const whatToDelete = axios.delete(
        `http://localhost:5000/api/form/delete/${id}`
      );
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const { continent, name, population, type, _id } = this.props.data;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Pavadinimas</h5> <span>{name}</span>
          <h5 className="card-title">Zemynas</h5> <span>{continent}</span>
          <h5 className="card-title">Gyventoju skaicius</h5>{' '}
          <span>{population}</span>
          <h5 className="card-title">Tipas</h5> <span>{type}</span>
          <br />
          <button onClick={() => this.handleDelete(_id)} className="delete">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
