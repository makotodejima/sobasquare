import React from "react";
import styled from "styled-components";

export default () => (
  <Footer>
    <p>Designed and developed by Makoto Dejima</p>
    {/* <p>
      Contact information:{" "}
      <a href="mailto:someone@example.com">someone@example.com</a>.
    </p> */}
  </Footer>
);

const Footer = styled.footer`
  p {
    font-size: 0.8rem;
    margin-left: 1rem;
  }
  position: fixed;
  bottom: 0;
  width: 100%;

  height: 1.5rem;
  text-align: left;
`;
