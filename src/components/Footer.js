import React from "react";
import styled from "styled-components";

export default () => (
  <Footer>
    <div className="left">
      <p>
        Designed and developed by{" "}
        <a href="https://madmak.me/"> Makoto Dejima</a>
      </p>
    </div>
    <div className="right">
      {/* <p>Missing your favorite? Please let us know!</p> */}
    </div>
  </Footer>
);

const Footer = styled.footer`
  position: fixed;
  bottom: 3px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: ubuntu;

  height: 1.5rem;
  text-align: left;
  .left p {
    font-size: 0.9rem;
    margin-left: 1rem;
    a {
      color: #4285f4;
      text-decoration: none;
    }
  }

  .right p {
    font-size: 1rem;
    margin-right: 1rem;
  }

  @media (max-width: 414px) {
    display: none;
  }
`;
