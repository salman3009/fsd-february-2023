import React from 'react'
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      mobileNo: "9876543210",
      position: "Manager",
      age: 34
    };
  }
  changeAge = () => {
    this.setState({age: this.state.age+1});
  }
  render() {
    return (
      <div>
        <h1>Hello, my name is {this.state.name} and my contact number is {this.state.mobileNo}</h1>
        <p>
          I am {this.state.age} years old and I am working here as {this.state.position}
        </p>
        <button
          type="button"
          onClick={this.changeAge}
        >Increase Age</button>
      </div>
    );
  }
}


export default App;