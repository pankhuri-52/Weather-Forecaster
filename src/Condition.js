import React, {Component} from 'react';
import axios from 'axios';
import Display from './Display';

class Condition extends Component {
  
  constructor(props) {
    super(props);
      this.state = {
        // name : '',
        // region : '',
        // country : '',
        // latitude : '',
        // date : '',
        // temp : '',
        // humidity : '',
        // prec : '',
        // wind : ''
        wdata : ''
      }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
   
         axios.get(`http://api.weatherapi.com/v1/current.json?key=e2e00c27a0ae457e9ae162727202403&q=Karnal`)
         .then(response => {
             this.setState({
               wdata : response.data.location
             })
            //  console.log(this.state.name);
         })
    
  }

  handleSubmit(e) {
       e.preventDefault();
       console.log(this.state.wdata);
  }

  render() {

    const {wdata} = this.state;
    // console.log(wdata);
  return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
          <button type="submit">Submit</button>
        </form>

        <Display data={wdata} />
      </div>
    );
  }
}


export default Condition;