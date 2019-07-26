import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Sort = ({ setSortBy, sortBy, setSelected }) => {
  return (
    <Wrapper>
      <button
        onClick={() => {
          setSortBy("asc");
          setSelected(Math.random() * -1);
        }}
      >
        ASC
      </button>
      <button
        onClick={() => {
          setSortBy("desc");
          setSelected(Math.random() * -1);
        }}
      >
        DESC
      </button>
    </Wrapper>
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

const mapStateToProps = ({ sortBy }) => {
  return {
    sortBy,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sort);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
