import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const initialState = { input: "", results: [] };

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_INPUT":
      return { ...state, input: action.newInput };
    case "UPDATE_RESULTS":
      return { ...state, results: action.newResults };
    default:
      return state;
  }
}

const SearchBar = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "UPDATE_RESULTS", newResults: props.sobayas });
  }, [props.sobayas]);

  useEffect(() => {
    UpdateResults(state.input);
    if (state.input.length > 0) {
      props.toggleIsSearching(true);
    } else {
      props.toggleIsSearching(false);
    }
  }, [state.input]);

  const handleChange = e => {
    dispatch({ type: "UPDATE_INPUT", newInput: e.target.value });
  };

  const UpdateResults = input => {
    const _input = input
      .toLowerCase()
      .trim()
      .replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");

    const seeMatch = str => {
      return str.match(new RegExp(_input, "i"));
    };

    const _sobayas = props.sobayas.filter(s => {
      return (
        seeMatch(s.name.en) ||
        seeMatch(s.name.jp) ||
        seeMatch(s.address) ||
        seeMatch(s.neighborhood)
      );
    });
    props.updateSearchResults(_sobayas);
    dispatch({
      type: "UPDATE_RESULTS",
      newResults: _sobayas
    });
  };

  // <input type="search" /> -> default delete icon
  //
  // const clearInput = () => {
  //   inputEl.current.value = "";
  //   updateInput("");
  // };

  return (
    <Wrapper>
      <input
        autoFocus
        type="search"
        value={state.input}
        onChange={e => {
          handleChange(e);
        }}
        placeholder='Try "Kanda" or "Azabu"'
      />
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    sobayas: state.sobayas
  };
};

export default connect(mapStateToProps)(SearchBar);

const Wrapper = styled.div`
  width: 202px;
  margin: 1rem auto 1.2rem;
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
`;
