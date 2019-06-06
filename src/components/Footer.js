import React from "react";
import styled from "styled-components";

const Logo = () => (
  <a href="https://madmak.me/" target="_blank" rel="noopener noreferrer">
    <SVG id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198.3 91.46">
      <title>md</title>
      <path
        id="outer"
        d="M154.41,3c22.84.37,41.05,19.81,40.69,43.42-.35,23.08-18.36,41.7-40.69,42.06H43.89C21.05,88.1,2.84,68.66,3.2,45.06,3.55,22,21.56,3.36,43.89,3H154.41"
      />
      <path
        id="m"
        d="M125,72.05,122.54,86h-5.26l3.61-20.23a34.81,34.81,0,0,0,.52-5.48c0-4.54-2.89-6.19-5.78-6.19-5.16,0-12,5-13.83,15.17L98.8,86H93.54l3.61-20.23a37.91,37.91,0,0,0,.52-5.52c0-4.54-2.89-6.19-5.78-6.19-5.27,0-12,5.06-13.84,15.17L75.05,86H69.8l4.44-24.67a66.44,66.44,0,0,0,1-10.53h4.91a60.17,60.17,0,0,1-.52,8.15c3-5.57,9.09-9.29,14.25-9.29,5.47,0,8.57,3.2,9.08,8.47v.51c3.72-5.88,9.5-9,14.76-9,6.4,0,9,4.65,9,9.6A101.27,101.27,0,0,1,125,72.05Z"
      />
      <path
        id="d"
        d="M165.77,74.94a66.39,66.39,0,0,0-1.13,11h-4.85a37.78,37.78,0,0,1,.41-6.2,16.49,16.49,0,0,1-14,7.33c-9.8,0-14.86-8.77-13.31-19.2,1.55-10.73,9.7-18.27,19.09-18.27,5.47,0,10.43,3.2,11.77,7.64L169.63,24h5.27ZM152.25,53.88c-6.71,0-13,5.58-14.24,14.46s3.2,14.55,9.81,14.55,13-5.65,14.33-14.55S159,53.88,152.25,53.88Z"
      />
    </SVG>
  </a>
);

const SVG = styled.svg`
  &#logo {
    width: 65px;
    vertical-align: bottom;
    #outer {
      fill: none;
      stroke: black;
      stroke-miterlimit: 10;
      stroke-width: 5px;
    }
    #m,
    #d {
      fill: black;
    }
  }
`;

export default () => (
  <Footer>
    <div className="left">
      <Logo />
    </div>
    <div className="right">
      <p>
        <span> Missing your favorite? </span>
        <a
          href="https://makotodejima.typeform.com/to/nQ0S6u"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span> Please tell us about your pick.</span>
        </a>
      </p>
    </div>
  </Footer>
);

const Footer = styled.footer`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.8);
  bottom: 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  font-family: ubuntu;

  .left {
    position: absolute;
    bottom: 8px;
    left: 1rem;
    @media (max-width: 380px) {
      #logo {
        width: 50px;
      }
    }
  }

  .right p {
    position: absolute;
    bottom: 8px;
    right: 1rem;
    font-size: 1rem;
    a {
      color: #4285f4;
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    .left {
    }
    .right p {
      font-size: 0.8rem;
      @media (max-width: 414px) {
        font-size: 0.7rem;
        span {
          display: block;
        }
      }
    }
  }
`;
