import React, {Component} from 'react';
import axios from 'axios';
import Display from './Display';
import image from './images/download.jpg';
import './cstyle.css';

const url = `http://api.weatherapi.com/v1/current.json?key=e2e00c27a0ae457e9ae162727202403&q=`;

class Condition extends Component {

constructor(props) {
    super(props);
      this.state = {
        wdata : '',
        value : '',
        query : ''
      }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e)  {
      this.setState({ value : e.target.value})
  }

  handleSubmit(e) {
       e.preventDefault();

       if(this.state.value.length > 0) {
        axios.get(url+this.state.value)
        .then(response => {
            this.setState({
              wdata : response.data.location
            })
             console.log(this.state.wdata);
        })
       }

       this.setState({
            value : ''
        })
  }

  render() {

    const {wdata} = this.state;
  
  return (
      <div className="container">
        <img className="logo" src={image} alt="weather-forecast" />
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input type="text" className="insertbox" value={this.state.value} onChange={this.handleChange} />
          <button type="submit" className="submit-button">Submit</button>
        </form>

        <Display data={wdata} />
      </div>
    );
  }
}


export default Condition;