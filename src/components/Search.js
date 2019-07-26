import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const SearchBar = props => {
  const inputRef = useRef();
  const [input, setInput] = useState("");

  useEffect(() => {
    inputRef.current.focus();

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
        seeMatch(s.name.hiragana) ||
        seeMatch(s.address) ||
        seeMatch(s.neighborhood)
      );
    });
    props.updateSearchResults(_sobayas);
    // props.update(_sobayas);

    if (input.length > 0) {
      props.toggleIsSearching(true);
    } else {
      props.toggleIsSearching(false);
    }
  }, [props, input]);

  return (
    <Wrapper>
      <input
        type="search"
        value={input}
        onChange={() => setInput(inputRef.current.value)}
        ref={inputRef}
        placeholder="Kanda, Azabu, 砂場..."
      />
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    update: _sobayas =>
      dispatch({
        type: "UPDATE_RESULTS",
        newResults: _sobayas,
      }),
  };
};

const mapStateToProps = state => {
  return {
    sobayas: state.sobayas,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);

const Wrapper = styled.div`
  width: 220px;
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
  @media (max-width: 414px) {
    margin: 0.4rem auto 0.8rem;
  }
`;
