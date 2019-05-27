import React from "react";
import { Route, Link } from "react-router-dom";
import { Flipper } from "react-flip-toolkit";
import { ListContrainer, OuterItemWrapper } from "./StyledComps";
import { store } from "../index";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import ExpandedListItem from "./ExpandedListItem";
import Detail from "./Detail";
import sobayas from "../data/sobayas.js"; // only use for initial loading of sobayas data!!! Use data on Redux state!!
import logo from "../images/logo.svg";
import GoogleMaps from "./GoogleMaps";
import Search from "./Search";

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
    store.dispatch({ type: "SORT_SOBAYAS", order: "asc" });
  }

  render() {
    const { selected } = this.state;
    return (
      <div>
        <Search items={this.props.sobayas} />
        <Link to={`/`}>
          <img src={logo} alt="Sobasquare logo" id="logo" />
        </Link>
        <p
          onClick={() => {
            this.setState({
              selected: -2
            });
            store.dispatch({ type: "SORT_SOBAYAS", order: "asc" });
          }}
        >
          Sort ASC
        </p>
        <p
          onClick={() => {
            this.setState({
              selected: -1
            });
            store.dispatch({ type: "SORT_SOBAYAS", order: "desc" });
          }}
        >
          Sort DESC
        </p>

        <p>
          <Link to={`/map/`}>SHOW MAP</Link>
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
          <Route path="/sobaya/:id" render={props => <Detail {...props} />} />
          <Route path="/map/" render={props => <GoogleMaps {...props} />} />
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
        {/* <GoogleMaps /> */}
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
