import React from "react";
import { Route } from "react-router-dom";
import { Flipper } from "react-flip-toolkit";
import { ListContrainer, OuterItemWrapper } from "./StyledComps";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import ExpandedListItem from "./ExpandedListItem";
import Detail from "./Detail";
import sobayas from "../data/sobayas.js"; // only use for initial loading of sobayas data!!! Use data on Redux state!!
import Logo from "./Logo";
import GoogleMaps from "./GoogleMaps";
import SearchBar from "./Search";
import Footer from "./Footer";
import Nav from "./Nav";
import NoResults from "./NoResults";

class List extends React.Component {
  state = {
    selected: undefined,
    isSearching: false,
    searchResults: [],
  };

  componentDidMount() {
    // this.props.sortSobayas();
  }

  init = () => {
    this.setState({ selected: null });
  };

  handleClick = (e, index) => {
    if (e.target.classList.contains("preventShrink")) return;

    this.setState({
      selected: this.state.selected === index ? null : index,
    });
  };

  updateSearchResults = results => {
    this.setState(prevState => {
      // Turn off animation when pressing backspace
      if (results.length < prevState.searchResults.length) {
        return { searchResults: results, selected: Math.random() * -1 };
      } else {
        return { searchResults: results };
      }
    });
  };

  toggleIsSearching = bool => {
    this.setState({
      isSearching: bool,
    });
  };

  renderList = sobayas => {
    const { selected } = this.state;
    // if (sobayas.length < 1) return <NoResults />;
    return (
      <Flipper flipKey={selected} decisionData={selected}>
        <ListContrainer className="list-container">
          {sobayas &&
            sobayas.map((sobaya, index) => (
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
    );
  };

  render() {
    return (
      <>
        <div className="main">
          <Nav />
          <Logo init={this.init} />
          <SearchBar
            updateSearchResults={this.updateSearchResults}
            toggleIsSearching={this.toggleIsSearching}
          />
          <Route path="/sobaya/:id" render={props => <Detail {...props} />} />
          <Route path="/map/" render={props => <GoogleMaps {...props} />} />
          {this.state.isSearching
            ? this.renderList(this.state.searchResults)
            : this.renderList(this.props.sobayas)}
        </div>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sortSobayas: () =>
      dispatch({
        type: "SET_SOBAYAS",
        sobayas: sobayas,
      }),
    setSobayas: () =>
      dispatch({
        type: "SORT_SOBAYAS",
        sobayas: sobayas,
      }),
  };
};

const mapStateToProps = state => {
  return {
    sobayas: state.sobayas,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
