import React, { Component } from 'react';
import axios from 'axios';
class Form extends Component {
  state = {
    card: {
      name: '',
      continent: '',
      population: '',
      type: 'miestas',
    },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.handleRequest();
    this.resetForm();
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ card: { ...this.state.card, [name]: value } });
  };
  handleRequest = async () => {
    const data = await axios.post(
      'http://localhost:5000/api/form/new',
      this.state.card
    );
    this.props.onRefresh();
    console.log(data.data.result);
  };

  resetForm = () => {
    this.setState({
      card: {
        name: '',
        continent: '',
        population: '',
        type: 'miestas',
      },
    });
  };

  render() {
    const { card } = this.state;
    return (
      <div className="form-container">
        <form className="form" autoComplete="off" onSubmit={this.handleSubmit}>
          <label htmlFor="Pavadinimas">Name</label>
          <br />
          <input
            value={card.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            id=""
          />
          <br />
          <label htmlFor="Zemynas">Continent</label>
          <br />
          <input
            value={card.continent}
            onChange={this.handleChange}
            type="text"
            name="continent"
            id=""
          />
          <br />
          <label htmlFor="Gyventoju Skaicius">Population</label>
          <br />
          <input
            value={card.population}
            onChange={this.handleChange}
            type="number"
            name="population"
            id=""
          />
          <br />
          <label htmlFor="Tipas">Type</label>
          <br />
          <select
            value={card.type}
            onChange={this.handleChange}
            name="type"
            id=""
          >
            <option value="miestas">City</option>
            <option value="salis">Country</option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
