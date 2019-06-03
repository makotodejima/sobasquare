import React from "react";
import styled from "styled-components";

export default () => (
  <Footer>
    <div className="left">
      <p>
        Designed and developed by{" "}
        <a href="https://madmak.me/" target="_blank" rel="noopener noreferrer">
          {" "}
          Makoto Dejima
        </a>
      </p>
    </div>
    <div className="right">
      <p>
        Missing your favorite?{" "}
        <a
          href="https://makotodejima.typeform.com/to/nQ0S6u"
          target="_blank"
          rel="noopener noreferrer"
        >
          Please tell us about your pick.
        </a>
      </p>
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
    a {
      color: #4285f4;
      /* text-decoration: none; */
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-end;
    .left {
      display: none;
    }
    .right p {
      margin-right: 1rem;
      font-size: 0.8rem;
      @media (max-width: 380px) {
        font-size: 0.7rem;
      }
    }
  }
`;
