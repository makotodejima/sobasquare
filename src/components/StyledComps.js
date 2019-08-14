import styled, { keyframes } from 'styled-components';

export const ListContrainer = styled.div`
  overflow-y: scroll;
  height: 75vh;
  z-index: -1;
  width: 414px;
  @media (max-width: 414px) {
    width: 100%;
    min-width: 290px;
  }
`;

export const OuterItemWrapper = styled.div`
  margin: 2rem auto;
  width: 280px;
  @media (max-width: 414px) {
    margin: 1rem auto;
    width: 270px;
  }
`;

// Shared

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.d};
  justify-content: ${(props) => props.j};
  @media (max-width: 414px) {
    flex-direction: column;
  }
`;

export const dash = keyframes`
to {
    stroke-dashoffset: 0;
  }
`;
export const line = keyframes`
to {
    transform: rotate(0);
  }
`;

export const SbsqPick = styled.div`
  font-family: "Ubuntu";
  font-size: 1rem;
  margin: 10px 0;
`;

export const Website = styled.div`
  font-family: "Ubuntu";
  font-size: 1rem;
  text-align: center;
  margin: auto 0 auto;
  a {
    margin: 0 auto;
    font-size: 1.1rem;
    padding: 2px 15px;
    border: 1px solid #333;
    border-radius: 5px;
    text-decoration: none;
    color: #333;
    transition: all 0.2s;
    &:hover {
      color: white;
      background-color: #333;
    }
  }
  @media (max-width: 414px) {
    margin: 10px auto auto 0;
  }
`;

// Normal List

export const NormalListWrapper = styled.div`
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.07);
  background-color: #fff;
  transition: box-shadow 0.4s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
  }
`;

// in Expanded List
export const ExpandedListWrapper = styled.div`
  position: relative;
  padding: 1rem;
  border-radius: 10px;
  transition: box-shadow 0.4s;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  a {
    color: black;
    transition: color 0.4s;
  }
  #close {
    position: absolute;
    top: 0.5rem;
    right: 0;
    transform: translateX(45px);
    width: 2rem;
    cursor: pointer;
    #line-1 {
      transform: rotate(-22.5deg);
      animation: ${line} 0.4s ease-in forwards;
    }
    #line-2 {
      transform: rotate(22.5deg);
      transform-origin: top right;
      animation: ${line} 0.4s ease-in forwards;
    }
    @media (max-width: 414px) {
      display: none;
    }
  }
`;

export const Names = styled.div`
  a {
    &.on {
      color: #c1272d;
    }
  }
`;

export const Description = styled.div`
  div {
    opacity: 0;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 141.7px;

  span {
    position: absolute;
    opacity: 0;
    transition: all 0.4s;
    font-size: 1.2rem;
    color: white;
    text-shadow: 0px 0px 8px #000000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .wrap {
    width: 100%;
    height: 100%;
    display: flex;
  }

  img {
    transition: filter 0.5s;
    width: 100%;
    border-radius: 5px;
    filter: grayscale(50%);
  }

  &.on {
    span {
      opacity: 1;
    }
    img {
      filter: grayscale(100%) contrast(140%);
    }
  }
`;

export const ExpandedListImg = styled.img`
  width: 100%;
  border-radius: 5px;
  filter: grayscale(50%);
`;

// in Detail

// for Detail's fadein animation
export const fadein = keyframes`
  from {
    opacity: 0;
  }
  to   {
    opacity: 1; 
  } 
`;

export const DetailContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  max-width: 700px;
  top: 6rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.07);
  padding: 2rem 2rem;
  z-index: 1;
  animation: ${fadein} 0.3s ease-in;
  @media (max-width: 414px) {
    top: 6.5rem;
    box-shadow: none;
    width: 90%;
    padding: 32px 6px;
  }

  #close {
    position: absolute;
    right: 2rem;
    width: 2.2rem;
    z-index: 1;
    #line-1 {
      transform: rotate(-22.5deg);
      animation: ${line} 0.5s ease-in forwards;
    }
    #line-2 {
      transform: rotate(22.5deg);
      animation: ${line} 0.5s ease-in forwards;
      transform-origin: top right;
    }
    @media (max-width: 414px) {
      top: 5px;
      right: 0;
      width: 1.8rem;
    }
  }

  & > div {
    opacity: 0;
    animation: ${fadein} 0.3s ease-in forwards;
    margin-bottom: 1.5rem;
  }

  div:nth-child(2) {
    animation-delay: 0.16s;
  }
  div:nth-child(3) {
    animation-delay: 0.24s;
  }
  div:nth-child(4) {
    animation-delay: 0.36s;
  }
  div:nth-child(5) {
    animation-delay: 0.4s;
  }
  div:nth-child(6) {
    animation-delay: 0.48s;
  }
  div:nth-child(7) {
    animation-delay: 0.56s;
  }
  div:nth-child(8) {
    animation-delay: 0.64s;
  }
  div:nth-child(9) {
    animation-delay: 0.7s;
  }

  .url {
    font-family: "Ubuntu";
    font-size: 1rem;

    a {
      color: blue;
    }
  }

  .address {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 0;
  }
`;

export const Review = styled.div`
  font-size: 1rem;
  line-height: 1.6;
`;

export const DetailImgContainer = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem !important;
  div {
    height: 185px;
    width: 100%;
    margin: 0;
    img {
      margin: 0 auto;
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: contrast(105%);
    }
  }
  @media (max-width: 414px) {
    flex-direction: column;
    justify-content: space-between;
    div {
      width: 100%;
      margin: 5px 0;
    }
  }
`;

export const ExternalLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 3rem !important;
  @media (max-width: 414px) {
    flex-direction: column;
    > span {
      margin: 12px 0;
    }
  }
`;

export const FsqLink = styled.span`
  width: 50%;
  font-family: Ubuntu;
  font-size: 1.3rem;
  text-align: center;
  @media (max-width: 414px) {
    width: 100%;
  }
  a {
    position: relative;
    padding: 4px 20px;
    border: 2px solid #d76179;
    border-radius: 5px;
    color: #fff;
    background-color: #d76179;
    text-decoration: none;
    transition: all 0.2s;
    .likes {
      font-weight: bold;
      margin-right: 10px;
    }
    &:hover {
      .likes::after {
        position: absolute;
        content: "Open FOURSQUARE";
        bottom: 5px;
        right: 20px;
        font-size: 1rem;
        color: #d76179;
      }
    }
    #fsq_logo {
      width: 150px;
      fill: #fff;
    }
    &:hover {
      color: #d76179;
      background-color: #fff;
    }
  }
`;

export const GoogleMapsLink = styled.span`
  width: 50%;
  font-family: "Ubuntu";
  font-size: 1.3rem;
  text-align: center;
  @media (max-width: 414px) {
    width: 100%;
  }
  a {
    padding: 4px 20px;
    border: 2px solid #4285f4;
    border-radius: 5px;
    color: #fff;
    background-color: #4285f4;
    text-decoration: none;
    transition: all 0.2s;
    .text {
    }
    #googlemaps_icon {
      fill: #fff;
      transform: translateY(3px);
      margin-left: 5px;
      transition: all 0.2s;
    }
    &:hover {
      color: #4285f4;
      background-color: #fff;
      #googlemaps_icon {
        fill: #4285f4;
      }
    }
  }
`;
