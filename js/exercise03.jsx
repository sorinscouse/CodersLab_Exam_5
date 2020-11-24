import React from "react";
import ReactDOM from "react-dom";

class Surprise extends React.Component {
  state = {
    text: "Wait for it..."
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        text: "Surprise!"
      });
    }, 5000);
  }

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

class App extends React.Component {
  render() {
    return <Surprise />;
  }
}

//Nie zmieniaj tego kodu poniżej!
document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.getElementById("app"));
});
