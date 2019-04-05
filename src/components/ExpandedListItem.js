import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ExpandedListItem({ sobaya, match }) {
  const img = require(`../images/${sobaya.id}.jpg`);
  return (
    <div className="expanded list">
      <p>{sobaya.name.jp}</p>
      <p>{sobaya.neighborhood}</p>
      <p>Likely open</p>
      <p>{sobaya.recommendation}</p>
      <StyledImg src={img} alt={sobaya.id} />
      <Link
        // onClick={() => props.fetchFsqData(props.index)}
        to={`${match.path}${sobaya.id}`}
      >
        See Detail
      </Link>
    </div>
  );
}

const StyledImg = styled.img`
  width: 90%;
  border-radius: 5px;
  filter: grayscale(50%);
`;
