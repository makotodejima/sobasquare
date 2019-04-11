import React from "react";
import { Route } from "react-router-dom";
import { Flipper } from "react-flip-toolkit";

import ListItem from "./ListItem";
import ExpandedListItem from "./ExpandedListItem";
import Detail from "./Detail";
import sobayas from "../data/sobayas.js";
import Logo from "./Logo";

class List extends React.Component {
  state = {
    selected: undefined
  };

  handleClick = (e, index) => {
    if (e.target.classList.contains("preventShrink")) return;

    this.setState({
      selected: this.state.selected === index ? null : index
    });
  };

  render() {
    const { selected } = this.state;

    return (
      <div>
        <Logo />
        <Flipper
          flipKey={selected}
          decisionData={selected}
          spring="gentle"
          staggerConfig={{
            list: {
              speed: 1
            }
          }}
        >
          <Route
            path="/:id"
            render={props => <Detail {...props} index={selected} />}
          />

          <div className="list-container">
            {Object.keys(sobayas).map((sobayaId, index) => (
              <div
                className="item-wrapper"
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
                      />
                    )}
                  />
                ) : (
                  <Route
                    path="/"
                    render={props => (
                      <ListItem
                        {...props}
                        sobaya={sobayas[sobayaId]}
                        index={index}
                      />
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </Flipper>
      </div>
    );
  }
}

export default List;
