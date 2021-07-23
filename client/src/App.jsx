import './App.css';
import React, { Component } from 'react';
import Card from './components/card';
import Form from './components/form';
import axios from 'axios';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { Route, Switch } from 'react-router';
import MainPage from './components/mainPage';
class App extends Component {
  state = {
    data: [],
    countryOrTown: 'Country',
  };

  getAllData = async () => {
    try {
      const dataResult = await axios.get(
        'http://localhost:5000/api/form/allForms'
      );
      console.log(dataResult.data);
      this.setState({ data: dataResult.data });
    } catch (err) {
      console.log(err);
    }
  };
  refreshData = () => {
    this.setState({ data: this.getAllData() });
  };
  componentDidMount() {
    // this.getCities();
    // this.getCountries();

    this.setState({ data: this.getAllData() });
  }

  getCities = async () => {
    try {
      const allCities = await axios.get(
        'http://localhost:5000/api/form/cities'
      );
      console.log('cities', allCities.data.onlyCities);
      this.setState({ data: allCities.data.onlyCities });
    } catch (err) {
      console.log(err);
    }
  };

  getCountries = async () => {
    try {
      const allCountries = await axios.get(
        'http://localhost:5000/api/form/countries'
      );
      console.log('counties', allCountries.data.onlyCountries);
      this.setState({ data: allCountries.data.onlyCountries });
    } catch (err) {
      console.log(err);
    }
  };

  handleCountriesOrTowns = (event) => {
    console.log('you have selected ', event.target.value);
    this.setState({ countryOrTown: event.target.value });
    if (event.target.value === 'Country') {
      this.getCountries();
    } else if (event.target.value === 'City') {
      this.getCities();
    } else {
      this.getAllData();
    }
  };

  render() {
    return (
      <div>
        <Navbar />

        <div className="App">
          <Switch>
            <Route
              path="/create"
              render={(props) => (
                <Form onRefresh={this.refreshData} {...props} />
              )}
            />
            <Route
              path="/"
              render={(props) => (
                <MainPage
                  onRefresh={this.refreshData}
                  passHandleCountriesOrTowns={this.handleCountriesOrTowns}
                  passCountryOrTown={this.state.countryOrTown}
                  passData={this.state.data}
                  {...props}
                />
              )}
            />
          </Switch>
          {/* <Form onRefresh={this.refreshData} /> */}
          {/* <div className="cards-title">Card list</div>
          <div className="filter-container">
            <span className="filter-title">Choose Cities or Towns</span>
            <select
              value={this.state.countryOrTown}
              onChange={this.handleCountriesOrTowns}
            >
              <option value="All">All</option>
              <option value="Country">Country</option>
              <option value="City">City</option>
            </select>
          </div>
          <div className="card-container">
            {this.state.data.length > 0 &&
              this.state.data.map((d) => (
                <Card onRefresh={this.refreshData} key={d._id} data={d} />
              ))}
          </div> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
