import React from "react";
import logo from "../images/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default props => (
  <Container onClick={props.init}>
    <Link to={`/`}>
      <img src={logo} alt="Sobasquare logo" />
    </Link>
  </Container>
);

const Container = styled.div`
  width: 100px;
  margin: 2rem auto 0;
  @media (max-width: 414px) {
    width: 80px;
    margin: 1rem auto 0;
  }
`;
