import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Flipper } from "react-flip-toolkit";
import { ListContrainer, OuterItemWrapper } from "./StyledComps";
import NoResults from "./NoResults";
import ListItem from "./ListItem";
import ExpandedListItem from "./ExpandedListItem";
import { filterSobayas } from "./VisibilityControl/Search";
import { sortSobayas } from "./VisibilityControl/Sort";
import { setSortBy, setSelected } from "../reducers/actions";

const List = ({ sobayas, visibilityFilter, sortBy, selected, setSelected }) => {
  const containerRef = useRef();

  const handleClick = (e, id) => {
    if (e.target.classList.contains("preventShrink")) return;
    setSelected(selected === id ? null : id);
  };

  // First filter by Search
  const visibleSobayas = filterSobayas(sobayas, visibilityFilter);
  // Then sort
  const sortedVisibleSobayas = sortSobayas(visibleSobayas, sortBy);

  return (
    <Flipper flipKey={selected} decisionData={selected}>
      <ListContrainer className="list-container" ref={containerRef}>
        {sortedVisibleSobayas.length > 0 ? (
          sortedVisibleSobayas.map(sobaya => (
            <OuterItemWrapper
              className="item-wrapper"
              key={sobaya.id}
              onClick={e => handleClick(e, sobaya.id)}
            >
              {selected === sobaya.id ? (
                <ExpandedListItem sobaya={sobaya} />
              ) : (
                <ListItem sobaya={sobaya} />
              )}
            </OuterItemWrapper>
          ))
        ) : (
          <NoResults />
        )}
      </ListContrainer>
    </Flipper>
  );
};

const mapDispatchToProps = {
  setSortBy,
  setSelected,
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
