import styled, { keyframes } from "styled-components";

// in Expanded Detail

export const ExpandedListContainer = styled.div`
  box-shadow: 0px 0px 45px -25px rgba(0, 0, 0, 0.75);

  a {
    /* text-decoration: none; */
    color: black;
    transition: color 0.2s;
    :hover {
      color: darkcyan;
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
  box-shadow: 0px 0px 45px -30px rgba(0, 0, 0, 0.75);
  padding: 2rem 2rem;
  z-index: 10;
  animation: ${fadein} 0.3s ease-in;

  & > div {
    opacity: 0;
    animation: ${fadein} 0.3s ease-in forwards;
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
`;

export const DetailImgContainer = styled.div`
  /* border-radius: 50px;
  overflow: hidden; */
  margin: 30px auto;
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
      /* filter: grayscale(30%); */
    }
  }
`;

export const FsqSection = styled.div`
  padding: 5px 0;
  text-align: center;
  width: 40%;
  background-color: #d76179;
  border-radius: 5px;
  color: white;
  p {
    font-family: "Helvetica";
    color: white;
  }
  .logo {
    margin: 0 auto;
    width: 200px;
  }
`;

export const ExternalLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
`;
