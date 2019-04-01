import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";

import ListItem from "./components/ListItem";
import ExpandedListItem from "./components/ExpandedListItem";

import data from "./data/sobaya.js";

const client_id = "XEGDINOVCPIBZV21VRDACIZFTI4DPXKNOW5KQ1AIJUW4RSWX";
const client_secret = "OJIQWBR4LNP31ZUHV2PCYH1AQK4Z3FH3KXBRC344FJCT00JD";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={List} />
      </div>
    </Router>
  );
}

class List extends React.Component {
  state = {
    selected: undefined,
    sobayas: data
  };

  handleClick = index => {
    this.setState({
      selected: this.state.selected === index ? null : index
    });
  };

  render() {
    const { sobayas, selected } = this.state;

    // fetch(
    //   `https://api.foursquare.com/v2/venues/4bc3f589f8219c7427deb610/tips?client_id=${client_id}&client_secret=${client_secret}&v=20190401`
    // )
    //   .then(res => res.json())
    //   .then(data => {
    //     const tips = data.response.tips.items;
    //     console.log(tips[0].text);
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });

    return (
      <div className="list-container">
        <div>
          {Object.keys(sobayas).map((sobaya, index) => (
            <div
              index={index}
              key={index}
              onClick={() => this.handleClick(index)}
            >
              {selected === index ? (
                <Route
                  exact
                  path="/"
                  render={props => (
                    <ExpandedListItem
                      {...props}
                      sobaya={sobayas[sobaya]}
                      // name={sobayas[sobaya].name}
                      // neighborhood={sobayas[sobaya].neighborhood}
                      // address={sobayas[sobaya].address}
                      // recommendation={sobayas[sobaya].recommendation}
                    />
                  )}
                />
              ) : (
                <Route
                  exact
                  path="/"
                  render={props => <ListItem {...props} sobaya={sobaya} />}
                />
                // <Route path="/" component={ListItem} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
