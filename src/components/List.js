import React, { useState, useEffect, useRef } from "react";
import { Route } from "react-router-dom";
import { Flipper } from "react-flip-toolkit";
import { ListContrainer, OuterItemWrapper } from "./StyledComps";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import ExpandedListItem from "./ExpandedListItem";
import Detail from "./Detail";
import initSr from "./ScrollReveal";
import Logo from "./Logo";
import GoogleMaps from "./GoogleMaps";
import SearchBar, { filterSobayas } from "./Search";
import Footer from "./Footer";
import Nav from "./Nav";
import NoResults from "./NoResults";
import { sortSobayas } from "../reducers/reducer";

const List = ({ sobayas, visibilityFilter, sortBy, setSortBy }) => {
  const [selected, setSelected] = useState(undefined);
  const containerRef = useRef();

  useEffect(() => {
    initSr(containerRef.current, ".item-wrapper");
  }, []);

  const handleClick = (e, index) => {
    if (e.target.classList.contains("preventShrink")) return;
    setSelected(selected === index ? null : index);
  };

  // Search
  const visibleSobayas = filterSobayas(sobayas, visibilityFilter);
  // Then sort
  const sortedVisibleSobayas = sortSobayas(visibleSobayas, sortBy);

  return (
    <>
      <div className="main">
        {/* Routes */}
        <Route path="/sobaya/:id" render={props => <Detail {...props} />} />
        <Route path="/map/" render={props => <GoogleMaps {...props} />} />
        {/* Routes */}
        <Nav />
        <Logo />
        <SearchBar />
        <button onClick={() => setSortBy("desc")}> TEST SORT</button>
        <Flipper flipKey={selected} decisionData={selected}>
          <ListContrainer className="list-container" ref={containerRef}>
            {sortedVisibleSobayas.length > 0 ? (
              sortedVisibleSobayas.map((sobaya, index) => (
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
    setSortBy: order =>
      dispatch({
        type: "SET_SORT_BY",
        sortBy: order,
      }),
  };
};

const mapStateToProps = state => {
  return {
    sobayas: state.sobayas,
    visibilityFilter: state.visibilityFilter,
    sortBy: state.sortBy,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
