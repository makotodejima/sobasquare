import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";

import ListItem from "./components/ListItem";
import ExpandedListItem from "./components/ExpandedListItem";

import sobayas from "./data/sobaya.js";

const client_id = "XEGDINOVCPIBZV21VRDACIZFTI4DPXKNOW5KQ1AIJUW4RSWX";
const client_secret = "OJIQWBR4LNP31ZUHV2PCYH1AQK4Z3FH3KXBRC344FJCT00JD";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={List} />
      </div>
    </Router>
  );
}

class List extends React.Component {
  state = {
    selected: undefined,
    fsqData: {}
  };

  handleClick = (e, index) => {
    if (e.target.tagName === "A") return;

    this.setState({
      selected: this.state.selected === index ? null : index
    });
  };

  fetchFsqData = index => {
    if (!this.state.fsqData[index]) {
      // fetchsobaya[index].fsq and set to index: response

      console.log("fetching now!!");
      fetch(
        `https://api.foursquare.com/v2/venues/${
          sobayas[index].fsq
        }?client_id=${client_id}&client_secret=${client_secret}&v=20190401`
      )
        .then(res => res.json())
        .then(json => {
          const venueData = json.response.venue;
          console.log(venueData);

          this.setState(prevState => ({
            fsqData: {
              ...prevState.fsqData,
              [index]: venueData
            }
          }));
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  };

  render() {
    const { selected } = this.state;

    return (
      <div>
        <div className="list-container">
          {sobayas.map((sobaya, index) => (
            <div
              index={index}
              key={index}
              onClick={e => this.handleClick(e, index)}
            >
              {selected === index ? (
                <Route
                  path="/"
                  render={props => (
                    <ExpandedListItem
                      {...props}
                      sobaya={sobaya}
                      index={index}
                      // fetchFsqData={this.fetchFsqData}
                    />
                  )}
                />
              ) : (
                <Route
                  path="/"
                  render={props => <ListItem {...props} sobaya={sobaya} />}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
