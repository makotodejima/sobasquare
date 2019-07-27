import React, { useRef } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const SearchBar = ({ visibilityFilter, setVisibilityFilter, setSelected }) => {
  const inputRef = useRef();

  const handleInputChange = () => {
    const searchword = inputRef.current.value;
    if (searchword.length > visibilityFilter.length) {
      setSelected(`adding-seatch-word-${searchword}`);
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
export const filterSobayas = (sobayas, keyword) => {
  const formattedKeyword = keyword
    .toLowerCase()
    .trim()
    .replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");

  const seeMatch = str => {
    return str.match(new RegExp(formattedKeyword, "i"));
  };

  const results = sobayas.filter(s => {
    return (
      seeMatch(s.name.en) ||
      seeMatch(s.name.jp) ||
      seeMatch(s.name.hiragana) ||
      seeMatch(s.address) ||
      seeMatch(s.neighborhood)
    );
  });
  return results;
};

const mapDispatchToProps = dispatch => {
  return {
    setVisibilityFilter: keyword =>
      dispatch({
        type: "SET_VISIBILITY_FILTER",
        visibilityFilter: keyword,
      }),
    setSelected: id =>
      dispatch({
        type: "SET_SELECTED",
        id,
      }),
  };
};

const mapStateToProps = state => {
  return {
    visibilityFilter: state.visibilityFilter,
  };
};

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
