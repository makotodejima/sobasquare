import React from "react";
import { Route } from "react-router-dom";

import ListItem from "./ListItem";
import ExpandedListItem from "./ExpandedListItem";
import Detail from "./Detail";
import sobayas from "../data/sobayas.js";

const client_id = "XEGDINOVCPIBZV21VRDACIZFTI4DPXKNOW5KQ1AIJUW4RSWX";
const client_secret = "OJIQWBR4LNP31ZUHV2PCYH1AQK4Z3FH3KXBRC344FJCT00JD";

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
        {/* <Route path="/:id" render={props => <Detail {...props} />} /> */}

        <div className="list-container">
          {Object.keys(sobayas).map((sobayaId, index) => (
            <div
              className="item-wrapper"
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
                      sobaya={sobayas[sobayaId]}
                      index={index}
                      // fetchFsqData={this.fetchFsqData}
                    />
                  )}
                />
              ) : (
                <Route
                  path="/"
                  render={props => (
                    <ListItem {...props} sobaya={sobayas[sobayaId]} />
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default List;
