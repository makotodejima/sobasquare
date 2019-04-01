import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function ExpandedListItem(props) {
  return (
    <div className="expanded list">
      <p>{props.name}</p>
      <p>{props.neighborhood}</p>
      <p>{props.address}</p>
      <p>{props.recommendation}</p>
      <Link to={`${props.match.url}${props.id}`}>Detail</Link>
    </div>
  );
}
