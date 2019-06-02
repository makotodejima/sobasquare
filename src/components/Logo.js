import React from "react";
import logo from "../images/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default () => (
  <Container>
    <Link to={`/`}>
      <img src={logo} alt="Sobasquare logo" />
    </Link>
  </Container>
);

const Container = styled.div`
  width: 100px;
  margin: 2rem auto 0;
`;
