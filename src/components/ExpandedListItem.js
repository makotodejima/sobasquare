import React from "react";

export default function ExpandedListItem(props) {
  return (
    <div className="expanded list">
      <p>{props.name}</p>
      <p>{props.neighborhood}</p>
      <p>{props.address}</p>
      <p>{props.recommendation}</p>
    </div>
  );
}
