import styled, { keyframes } from "styled-components";

export const ListContrainer = styled.div`
  overflow-y: scroll;
  height: 70vh;
  z-index: -1;
  width: 100%;
`;

export const OuterItemWrapper = styled.div`
  margin: 2rem auto;
  width: 300px;
`;

// Shared

// export const LogoWrap = styled.div`
//   display: inline-block;
//   margin: 2rem auto;
// `;

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

// Normal List

export const NormalListWrapper = styled.div`
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.07);
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
  a {
    color: black;
    transition: color 0.4s;
  }
  #close {
    position: absolute;
    top: 1rem;
    right: 0;
    transform: translateX(50px);
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
  img {
    transition: all 0.8s;
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
  max-width: 650px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.07);
  padding: 2rem 2rem;
  z-index: 1;
  animation: ${fadein} 0.3s ease-in;

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
    margin-bottom: 0;
  }
`;

export const Review = styled.div`
  font-size: 1rem;
  line-height: 1.6;
`;

export const DetailImgContainer = styled.div`
  /* border-radius: 50px;
  overflow: hidden; */
  margin: auto;
  display: flex;
  justify-content: space-between;
  div {
    flex: 1;
    height: 180px;
    margin: auto 5px;
    img {
      margin: 0 auto;
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: contrast(105%);
    }
  }
`;

export const FsqLink = styled.div`
  font-size: 1.3rem;
  padding: 2px 0;
  text-align: center;
  width: 40%;
  a {
    /* text-decoration: none; */
    color: #d76179;
    font-family: "Ubuntu";
  }
  .logo {
    margin: 0 auto;
    width: 120px;
    font-size: 1rem;
  }
  .powered-by-foursquare {
    fill: #d76179;
  }
`;

export const ExternalLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const GoogleMapsLink = styled.a`
  display: flex;
  color: #4285f4;

  font-family: "Ubuntu";

  #googlemaps_icon {
    transform: translateY(5px);
    margin-right: 5px;
  }
`;
