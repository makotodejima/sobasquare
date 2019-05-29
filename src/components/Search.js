import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { store } from "../index";

const SearchBar = props => {
  const sobayas = props.sobayas;
  const [input, updateInput] = useState("");
  const [results, setResults] = useState([]);

  const inputEl = useRef("");

  useEffect(() => {
    setResults(sobayas);
  }, [sobayas]);

  useEffect(() => {
    UpdateResults(input);
    if (input.length > 0) {
      props.toggleIsSearching(true);
    } else {
      props.toggleIsSearching(false);
    }
  }, [input]);

  useEffect(() => {
    props.updateSearchResults(results);
  }, [results]);

  const handleChange = e => {
    updateInput(e.target.value);
  };

  // <input type="search" /> -> default delete icon
  //
  // const clearInput = () => {
  //   inputEl.current.value = "";
  //   updateInput("");
  // };

  const UpdateResults = () => {
    setResults(
      sobayas.filter(function(s) {
        return (
          s.name.en.toLowerCase().match(input.toLowerCase()) ||
          s.address.toLowerCase().match(input.toLowerCase()) ||
          s.neighborhood.toLowerCase().match(input.toLowerCase())
        );
      })
    );
  };

  return (
    <Wrapper>
      <input
        autoFocus
        type="search"
        ref={inputEl}
        value={input}
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
  margin: 1rem auto 1.4rem;
  text-align: center;
  input {
    padding: 5px 1rem;
    border: solid 2px lightgrey;
    border-radius: 30px;
    width: 100%;
    line-height: 1.4;
    /* box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.09); */
    box-sizing: border-box;
    font-size: 16px;
    outline: none;
    /* border: none; */
    /* background-color: lightyellow; */
  }
`;
