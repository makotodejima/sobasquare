import React from "react";

export default function ListItem(props) {
  return (
    <div className="normal list">
      <p>{props.sobaya.name.jp}</p>
      <p>{props.sobaya.name.en}</p>
    </div>
  );
}
