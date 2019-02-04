import React, { Component } from "react";
import ReactDOM from "react-dom";
import families from "./font";
import "./styles.css";

class App extends Component {
  state = {
    text: "satendra"
  };
  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="text"
          onChange={this.onChange}
          placeholder="type something here"
          style={{ padding: 10, border: "1px solid grey", borderRadius: 5 }}
        />
        {families.map((fam, id) => (
          <div style={{ margin: 5 }}>
            <span
              style={{
                fontSize: 20,
                backgroundColor: "lightblue",
                padding: 5,
                margin: 5,
                marginRight: 20,
                borderRadius: 5
              }}
            >
              {fam}
            </span>
            <span key={id} style={{ fontFamily: fam, fontSize: "28px" }}>
              {this.state.text}
            </span>
          </div>
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
