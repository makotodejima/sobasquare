import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const NoResults = ({ setVisibilityFilter, setSelected }) => {
  const handleClick = e => {
    const keyword = e.target.textContent;
    setVisibilityFilter(keyword);
    setSelected("Pressed-button-" + keyword);
  };

  return (
    <Wrapper>
      <h1>No Results</h1>
      <p>Try these keywords?</p>
      <Button onClick={handleClick}>Azabu</Button>
      <Button onClick={handleClick}>Minato</Button>
      <Button onClick={handleClick}>Sarashina</Button>
      <Button onClick={handleClick}>Roppongi</Button>
    </Wrapper>
  );
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

export default connect(
  null,
  mapDispatchToProps,
)(NoResults);

const Wrapper = styled.div`
  text-align: center;
  h1 {
    margin: 1rem;
  }
  p {
    margin: 2rem;
  }
`;

const Button = styled.button`
  display: block;
  cursor: pointer;
  font-size: 1rem;
  margin: 10px auto;
  padding: 4px 15px;
  border: 1px solid darkgrey;
  border-radius: 15px;
  background-color: transparent;
  transition: all 0.1s;
  :hover {
    opacity: 0.6;
  }
`;
