import React from 'react';
import styled, { keyframes } from 'styled-components';

const stretchdelay = keyframes`
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
    20% { -webkit-transform: scaleY(1.0) }
`;

const Spinner = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 10px;
  > div {
    background-color: #333;
    height: 60px;
    margin: auto 3px;
    width: 5px;
    display: inline-block;

    -webkit-animation: ${stretchdelay} 1.2s infinite ease-in-out;
    animation: ${stretchdelay} 1.2s infinite ease-in-out;
  }

  .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  .rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }
  .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
`;

//   @-webkit-keyframes sk-stretchdelay {
//
//   }

//   @keyframes sk-stretchdelay {
//     0%, 40%, 100% {
//       transform: scaleY(0.4);
//       -webkit-transform: scaleY(0.4);
//     }  20% {
//       transform: scaleY(1.0);
//       -webkit-transform: scaleY(1.0);
//     }
//   }

export default () => (
  <Spinner>
    <div className="rect1" />
    <div className="rect2" />
    <div className="rect3" />
    <div className="rect4" />
    <div className="rect5" />
  </Spinner>
);
