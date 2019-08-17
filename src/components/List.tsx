import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Flipper } from 'react-flip-toolkit';
import { ListContrainer, OuterItemWrapper } from './StyledComps';
import NoResults from './NoResults';
import ListItem from './ListItem';
import ExpandedListItem from './ExpandedListItem';
import { filterSobayas } from './VisibilityControl/Search';
import { sortSobayas } from './VisibilityControl/Sort';
import { setSortBy, setSelected } from '../reducers/actions';
import { IListProps, IRootState } from '../common/types';

const List = ({
  sobayas,
  visibilityFilter,
  sortBy,
  selected,
  setSelected,
}: IListProps) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    if ((e.target as Element).classList.contains('preventShrink')) return;
    setSelected(selected === id ? 'unselected' : id);
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

const mapStateToProps = (state: IRootState) => ({
  sobayas: state.sobayas,
  visibilityFilter: state.visibilityFilter,
  sortBy: state.sortBy,
  selected: state.selected,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
