import React, { Component } from 'react';
class Form extends Component {
  state = {};
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="Pavadinimas">Pavadinimas</label>
          <br />
          <input type="text" name="" id="" />
          <br />
          <label htmlFor="Zemynas">Zemynas</label>
          <br />
          <input type="text" name="" id="" />
          <br />
          <label htmlFor="Gyventoju Skaicius">Gyventoju Skaicius</label>
          <br />
          <input type="text" name="" id="" />
          <br />
          <label htmlFor="Tipas">Tipas</label>
          <br />
          <select name="tipas" id="">
            <option value="miestas">miestas</option>
            <option value="salis">salis</option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
