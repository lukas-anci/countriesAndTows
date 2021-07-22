import React, { Component } from 'react';
import axios from 'axios';
class Card extends Component {
  state = {
    edit: false,
    card: {
      name: '',
      continent: '',
      population: '',
      type: 'City',
    },
  };
  handleDelete = async (id) => {
    console.log('delete', id);
    try {
      await axios.delete(`http://localhost:5000/api/form/delete/${id}`);
      this.props.onRefresh();
    } catch (err) {
      console.log(err);
    }
  };

  handleEdit = async (id) => {
    console.log('edit', id);
    this.setState({ edit: !this.state.edit });
    await axios.put(
      `http://localhost:5000/api/form/edit/${id}`,
      this.state.card
    );
    // this.props.onRefresh();
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
          <h5 className="card-title">Name</h5>
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
          <h5 className="card-title">Continent</h5>
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

          <h5 className="card-title">Population</h5>

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

          <h5 className="card-title">Type</h5>

          {!this.state.edit ? (
            <span>{this.state.card.type ? this.state.card.type : type}</span>
          ) : (
            <select
              onChange={this.handleName}
              value={this.state.card.type}
              name="type"
              id=""
            >
              <option value="City">City</option>
              <option value="Country">Country</option>
            </select>
          )}

          <br />
          <button onClick={() => this.handleEdit(_id)} className="edit">
            Edit
          </button>
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
