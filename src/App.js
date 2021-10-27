import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = { //state는 object임
    count: 0
  };
  add = () => {
    console.log("add");
    this.setState(current => ({count : current.count + 1})); //setState를 할때마다 react는 render를 호출한다.
  };
  minus = () => { 
    console.log("minus"); 
    this.setState(current => ({count : current.count - 1}));
  };
  render() {
    return <div><h1>The number is {this.state.count}.</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>;
  };
}

export default App;
