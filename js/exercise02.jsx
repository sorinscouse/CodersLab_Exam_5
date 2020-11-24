import React from "react";
import ReactDOM from "react-dom";

const somebody = {
  name: "Sorin",
  lastname: "Olteanu",
  street: "Str. Dristorului",
  housenumber: "23",
  postcode: "45162",
  city: "Bucharest"
};
class Address extends React.Component {
  render() {
    if (
      this.props.items.name === "" &&
      this.props.items.lastname === "" &&
      this.props.items.street === "" &&
      this.props.items.housenumber === "" &&
      this.props.items.city === "" &&
      this.props.items.postcode.length < 5 &&
      this.props.items.postcode.length > 6
    ) {
      return null;
    } else {
      return (
        <div>
          <h1>
            {this.props.items.name} {this.props.items.lastname}
          </h1>
          <p>
            {this.props.items.street} {this.props.items.housenumber}
          </p>
          <p>
            {this.props.items.postcode} {this.props.items.city}
          </p>
        </div>
      );
    }
  }
}

class App extends React.Component {
  render() {
    return <Address items={somebody} />;
  }
}

//Nie zmieniaj tego kodu poniżej!
document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.getElementById("app"));
});

export { Address };
