import React, {Component} from 'react';

class Condition extends Component {
  componentDidMount(){
      
    const getConditions = async () => {
        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=e2e00c27a0ae457e9ae162727202403&q=Karnal`
        );
        const data = await response.json();
        console.log(data);
      }

      getConditions();
  }

  render() {

  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
    );
  }
}


export default Condition;