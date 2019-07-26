import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Flipper } from "react-flip-toolkit";
import { ListContrainer, OuterItemWrapper } from "./StyledComps";
import NoResults from "./NoResults";
import ListItem from "./ListItem";
import ExpandedListItem from "./ExpandedListItem";
import { filterSobayas } from "./Search";
import initSr from "./ScrollReveal";
import { sortSobayas } from "../reducers/reducer";

const List = ({
  sobayas,
  visibilityFilter,
  sortBy,
  selected,
  setSortBy,
  setSelected,
}) => {
  const containerRef = useRef();

  useEffect(() => {
    initSr(containerRef.current, ".item-wrapper");
    // If not subscribe, reveal effect go off after reset search bar
  }, [visibilityFilter]);

  const handleClick = (e, index) => {
    if (e.target.classList.contains("preventShrink")) return;
    setSelected(selected === index ? null : index);
  };

  // First filter by Search
  const visibleSobayas = filterSobayas(sobayas, visibilityFilter);
  // Then sort
  const sortedVisibleSobayas = sortSobayas(visibleSobayas, sortBy);

  return (
    <>
      <button
        onClick={() => {
          setSortBy("desc");
          setSelected(selected - 100);
        }}
      >
        TEST SORT
      </button>
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
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setSortBy: sortBy =>
      dispatch({
        type: "SET_SORT_BY",
        sortBy,
      }),
    setSelected: id =>
      dispatch({
        type: "SET_SELECTED",
        id,
      }),
  };
};

const mapStateToProps = ({ sobayas, visibilityFilter, sortBy, selected }) => {
  return {
    sobayas,
    visibilityFilter,
    sortBy,
    selected,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
