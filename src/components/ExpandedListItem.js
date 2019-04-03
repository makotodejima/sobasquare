import React from "react";
import { Route, Link } from "react-router-dom";
import Detail from "./Detail";

export default function ExpandedListItem(props) {
  return (
    <div className="expanded list">
      <p>{props.sobaya.name.jp}</p>
      <p>{props.sobaya.neighborhood}</p>
      <p>{props.sobaya.address}</p>
      <p>{props.sobaya.recommendation}</p>
      <Link
        // onClick={() => props.fetchFsqData(props.index)}
        to={`${props.match.path}${props.index}`}
      >
        Detail
      </Link>
      <Route path="/:id" render={props => <Detail {...props} />} />
    </div>
  );
}
