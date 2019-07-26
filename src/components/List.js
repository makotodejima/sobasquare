import React from "react";
import { Route } from "react-router-dom";
import { Flipper } from "react-flip-toolkit";
import { ListContrainer, OuterItemWrapper } from "./StyledComps";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import ExpandedListItem from "./ExpandedListItem";
import Detail from "./Detail";
import Logo from "./Logo";
import GoogleMaps from "./GoogleMaps";
import SearchBar, { filterSobayas } from "./Search";
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

  render() {
    const { selected } = this.state;
    const { sobayas, visibilityFilter } = this.props;

    // Search
    const visibleSobayas = filterSobayas(sobayas, visibilityFilter);

    return (
      <>
        <div className="main">
          {/* Routes */}
          <Route path="/sobaya/:id" render={props => <Detail {...props} />} />
          <Route path="/map/" render={props => <GoogleMaps {...props} />} />
          <Nav />
          <Logo init={this.init} />
          <SearchBar />
          <Flipper flipKey={selected} decisionData={selected}>
            <ListContrainer className="list-container">
              {visibleSobayas.length > 0 ? (
                visibleSobayas.map((sobaya, index) => (
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
                ))
              ) : (
                <NoResults />
              )}
            </ListContrainer>
          </Flipper>
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
      }),
    setSobayas: () =>
      dispatch({
        type: "SORT_SOBAYAS",
      }),
  };
};

const mapStateToProps = state => {
  return {
    sobayas: state.sobayas,
    visibilityFilter: state.visibilityFilter,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
