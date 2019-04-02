import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function ExpandedListItem(props) {
  return (
    <div className="expanded list">
      <p>{props.sobaya.name.jp}</p>
      <p>{props.sobaya.neighborhood}</p>
      <p>{props.sobaya.address}</p>
      <p>{props.sobaya.recommendation}</p>
      <Link
        onClick={() => props.fetchFsqData(props.index)}
        to={`${props.match.path}${props.index}`}
      >
        Detail
      </Link>
    </div>
  );
}
