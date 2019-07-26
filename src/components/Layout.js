import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Footer from "./Footer";
import Logo from "./Logo";

const Layout = ({ children }) => {
  return (
    <Main>
      <Logo />
      <Nav />
      {children}
      <Footer />
    </Main>
  );
};

export default Layout;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-height: 100vh;
`;
