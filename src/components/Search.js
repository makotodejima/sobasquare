import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { store } from "../index";

const SearchBar = props => {
  const sobayas = props.sobayas;
  const [input, updateInput] = useState("");
  const [results, setResults] = useState([]);

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
        type="text"
        value={input}
        onChange={e => {
          handleChange(e);
        }}
        placeholder='Try "Kanda" or "Sarashina"'
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
  /* height: 70px; */
  width: 200px;
  margin: 0 auto;
  text-align: center;
  input {
    width: 100%;
    line-height: 4;
    border: none;
    box-sizing: border-box;
    font-size: 16px;
    background: transparent;
    outline: none;
  }
`;
