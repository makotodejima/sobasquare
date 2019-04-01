import React from "react";
import ListItem from "./ListItem";
import ExpandedListItem from "./ExpandedListItem";

import data from "../data/sobaya.js";

class Lists extends React.Component {
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
    const { sobayas } = this.state;

    return (
      <div className="list-container">
        <div>
          {Object.keys(sobayas).map((sobaya, index) => (
            <div
              index={index}
              key={index}
              onClick={() => this.handleClick(index)}
            >
              {this.state.selected === index ? (
                <ExpandedListItem
                  name={this.state.sobayas[sobaya].name.jp}
                  neighborhood={this.state.sobayas[sobaya].neighborhood}
                  address={this.state.sobayas[sobaya].address}
                  recommendation={this.state.sobayas[sobaya].recommendation}
                />
              ) : (
                <ListItem sobaya={sobaya} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Lists;
