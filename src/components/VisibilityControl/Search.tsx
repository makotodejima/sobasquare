import React, { useRef } from 'react';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ISearchProps, IRootState, sobayasType } from '../../common/types';

const SearchBar = ({
  visibilityFilter,
  setVisibilityFilter,
  setSelected,
}: ISearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null!);

  const handleInputChange = () => {
    const searchword = inputRef.current.value;
    if (searchword.length > visibilityFilter.length) {
      setSelected(`searching-${searchword}`);
    }
    setVisibilityFilter(searchword);
  };

  return (
    <Wrapper>
      <input
        type="search"
        value={visibilityFilter}
        onChange={handleInputChange}
        ref={inputRef}
        placeholder="Kanda, Azabu, 砂場..."
      />
    </Wrapper>
  );
};

// Used in List
export const filterSobayas = (sobayas: sobayasType, keyword: string) => {
  const formattedKeyword = keyword
    .toLowerCase()
    .trim()
    .replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');

  const checkMatch = (str: string) =>
    str.match(new RegExp(formattedKeyword, 'i'));

  const results = sobayas.filter(
    s =>
      checkMatch(s.name.en) ||
      checkMatch(s.name.jp) ||
      checkMatch(s.name.hiragana) ||
      checkMatch(s.address) ||
      checkMatch(s.neighborhood),
  );
  return results;
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setVisibilityFilter: (keyword: string) =>
    dispatch({
      type: 'SET_VISIBILITY_FILTER',
      visibilityFilter: keyword,
    }),
  setSelected: (id: string) =>
    dispatch({
      type: 'SET_SELECTED',
      id,
    }),
});

const mapStateToProps = (state: IRootState) => ({
  visibilityFilter: state.visibilityFilter,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);

const Wrapper = styled.div`
  width: 220px;
  margin: 1rem 0.4rem 1.2rem;
  text-align: center;
  input {
    padding: 5px 1rem;
    border: solid 2px lightgrey;
    border-radius: 30px;
    -webkit-appearance: none;
    -webkit-border-radius: 30px;
    width: 100%;
    line-height: 1.4;
    box-sizing: border-box;
    font-size: 16px;
    outline: none;
  }
  @media (max-width: 414px) {
    margin: 0.4rem auto 0.8rem;
  }
`;
