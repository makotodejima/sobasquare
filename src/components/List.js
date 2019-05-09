import React from "react";
import { Route } from "react-router-dom";
import { Flipper } from "react-flip-toolkit";
import { ListContrainer, OuterItemWrapper, LogoWrap } from "./StyledComps";
import { store } from "../index";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import ExpandedListItem from "./ExpandedListItem";
import Detail from "./Detail";
import sobayas from "../data/sobayas.js"; // only use for loading initial sobaya data!!! For Sobaya data, use data on props.
import logo from "../images/logo.svg";

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

  componentDidMount() {
    store.dispatch({
      type: "SET_SOBAYAS",
      sobayas: sobayas
    });
  }

  render() {
    const { selected } = this.state;
    // if (this.props.sobayas.length <= 0) {
    //   console.log("ITs 0 length");
    //   return null;
    // }
    return (
      <div>
        {/* <LogoWrap> */}
        <img src={logo} id="logo" />
        {/* </LogoWrap> */}
        <p
          onClick={() => {
            this.setState({
              selected: -1
            });
            store.dispatch({ type: "SORT_SOBAYAS" });
          }}
        >
          sort
        </p>

        <Flipper
          flipKey={selected}
          decisionData={selected}
          // spring="noWobble"
          staggerConfig={{
            list: {
              speed: 0.1
            }
          }}
        >
          <Route path="/:id" render={props => <Detail {...props} />} />
          <ListContrainer className="list-container">
            {this.props.sobayas.map((sobaya, index) => (
              <OuterItemWrapper
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
                        sobaya={sobaya}
                        index={index}
                      />
                    )}
                  />
                ) : (
                  <Route
                    path="/"
                    render={props => (
                      <ListItem {...props} sobaya={sobaya} index={index} />
                    )}
                  />
                )}
              </OuterItemWrapper>
            ))}
          </ListContrainer>
        </Flipper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sobayas: state.sobayas
  };
};

export default connect(mapStateToProps)(List);
