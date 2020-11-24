import React from "react";
import ReactDOM from "react-dom";

class PizzaToppings extends React.Component {
  state = {
    list1: ["Tomato sauce", "Pineapple", "Corn", "Tomato"],
    list2: []
  };

  handleClick1 = event => {
    let statelist1 = this.state.list1;
    let statelist2 = this.state.list2;
    statelist2.push(event.target.innerText);
    let filtered = statelist1.filter((value, index) => {
      return value !== event.target.innerText;
    });
    this.setState({ list1: filtered });
    this.setState({ list2: statelist2 });
  };

  handleClick2 = event => {
    let statelist1 = this.state.list1;
    let statelist2 = this.state.list2;
    statelist1.push(event.target.innerText);
    let filtered = statelist2.filter((value, index) => {
      return value !== event.target.innerText;
    });
    this.setState({ list2: filtered });
    this.setState({ list1: statelist1 });
  };

  render() {
    const items1 = this.state.list1.map((el, index) => (
      <li onClick={this.handleClick1} key={index}>
        {el}
      </li>
    ));
    const items2 = this.state.list2.map((el, index) => (
      <li onClick={this.handleClick2} key={index}>
        {el}
      </li>
    ));
    return (
      <div>
        <ul>{items1}</ul>
        <ul>{items2}</ul>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <PizzaToppings />;
  }
}

//Nie zmieniaj tego kodu poniżej!
document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.getElementById("app"));
});