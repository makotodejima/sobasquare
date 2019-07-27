import React from "react";
import { connect } from "react-redux";
import logo from "../images/sbsq_logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = ({ setVisibilityFilter, setSortBy, setSelected }) => (
  <Container
    onClick={() => {
      setVisibilityFilter("");
      setSortBy("asc");
      setSelected("init");
    }}
  >
    <Link to={`/`}>
      <img src={logo} alt="Sobasquare logo" />
    </Link>
  </Container>
);

const mapDispatchToProps = dispatch => {
  return {
    setVisibilityFilter: keyword =>
      dispatch({
        type: "SET_VISIBILITY_FILTER",
        visibilityFilter: keyword,
      }),
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

export default connect(
  null,
  mapDispatchToProps,
)(Logo);

const Container = styled.div`
  width: 120px;
  margin: 1.5rem auto 0;
  @media (max-width: 414px) {
    width: 80px;
    margin: 1rem auto 0;
  }
`;
