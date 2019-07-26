import React, { useState } from "react";
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

const List = ({ sobayas, visibilityFilter }) => {
  const [selected, setSelected] = useState(undefined);

  const init = () => {
    setSelected(undefined);
  };

  const handleClick = (e, index) => {
    if (e.target.classList.contains("preventShrink")) return;
    setSelected(selected === index ? null : index);
  };

  // Search
  const visibleSobayas = filterSobayas(sobayas, visibilityFilter);

  return (
    <>
      <div className="main">
        {/* Routes */}
        <Route path="/sobaya/:id" render={props => <Detail {...props} />} />
        <Route path="/map/" render={props => <GoogleMaps {...props} />} />
        {/* Routes */}
        <Nav />
        <Logo init={init} />
        <SearchBar />
        <Flipper flipKey={selected} decisionData={selected}>
          <ListContrainer className="list-container">
            {visibleSobayas.length > 0 ? (
              visibleSobayas.map((sobaya, index) => (
                <OuterItemWrapper
                  className="item-wrapper"
                  key={index}
                  onClick={e => handleClick(e, index)}
                >
                  {selected === index ? (
                    <ExpandedListItem sobaya={sobaya} index={index} />
                  ) : (
                    <ListItem sobaya={sobaya} index={index} />
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
};

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
