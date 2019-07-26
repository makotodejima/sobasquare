import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Sort from "./Sort";

const index = () => {
  return (
    <Wrapper>
      <Search />
      <Sort />
    </Wrapper>
  );
};

export default index;

const Wrapper = styled.div`
  display: flex;
`;
