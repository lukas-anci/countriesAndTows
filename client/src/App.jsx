import './App.css';
import React, { Component } from 'react';
import Card from './components/card';
import Form from './components/form';
import axios from 'axios';
class App extends Component {
  state = {
    data: [],
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
    this.getAllData();
    this.setState({ data: this.getAllData() });
  }

  render() {
    return (
      <div className="App">
        <Form onRefresh={this.refreshData} />
        <div className="card-container">
          {this.state.data.length > 0 &&
            this.state.data.map((d) => (
              <Card onRefresh={this.refreshData} key={d._id} data={d} />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
