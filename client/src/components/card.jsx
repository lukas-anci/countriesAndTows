import React, { Component } from 'react';
import axios from 'axios';
class Card extends Component {
  state = {
    edit: false,
    card: {
      name: '',
      continent: '',
      population: '',
      type: 'miestas',
    },
  };
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

  handleEdit = async (id) => {
    console.log('edit', id);
    this.setState({ edit: !this.state.edit });
    const whatToUpdate = await axios.put(
      `http://localhost:5000/api/form/edit/${id}`,
      this.state.card
    );
  };
  handleName = (event) => {
    const { name, value } = event.target;
    this.setState({ card: { ...this.state.card, [name]: value } });
  };
  componentDidMount() {
    const obj = {
      name: this.props.data.name,
      continent: this.props.data.continent,
      population: this.props.data.population,
      type: this.props.data.type,
    };
    this.setState({ card: obj });
  }

  render() {
    const { continent, name, population, type, _id } = this.props.data;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Pavadinimas</h5>
          {!this.state.edit ? (
            <span>{this.state.card.name ? this.state.card.name : name}</span>
          ) : (
            <input
              value={this.state.card.name}
              name="name"
              onChange={this.handleName}
              type="text"
            />
          )}
          <h5 className="card-title">Zemynas</h5>
          {!this.state.edit ? (
            <span>
              {this.state.card.continent
                ? this.state.card.continent
                : continent}
            </span>
          ) : (
            <input
              value={this.state.card.continent}
              name="continent"
              onChange={this.handleName}
              type="text"
            />
          )}

          <h5 className="card-title">Gyventoju skaicius</h5>

          {!this.state.edit ? (
            <span>
              {this.state.card.population
                ? this.state.card.population
                : population}
            </span>
          ) : (
            <input
              value={this.state.card.population}
              name="population"
              onChange={this.handleName}
              type="number"
            />
          )}

          <h5 className="card-title">Tipas</h5>

          {!this.state.edit ? (
            <span>{this.state.card.type ? this.state.card.type : type}</span>
          ) : (
            <select
              onChange={this.handleName}
              value={this.state.card.type}
              name="type"
              id=""
            >
              <option value="miestas">miestas</option>
              <option value="salis">salis</option>
            </select>
          )}

          <br />
          <button onClick={() => this.handleDelete(_id)} className="delete">
            Delete
          </button>
          <br />
          <button onClick={() => this.handleEdit(_id)} className="edit">
            Edit
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
