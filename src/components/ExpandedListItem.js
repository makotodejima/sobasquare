import React from "react";
import { Route, Link } from "react-router-dom";
import Detail from "./Detail";

export default function ExpandedListItem({ sobaya, match }) {
  return (
    <div className="expanded list">
      <p>{sobaya.name.jp}</p>
      <p>{sobaya.neighborhood}</p>
      <p>{sobaya.address}</p>
      <p>{sobaya.recommendation}</p>
      <Link
        // onClick={() => props.fetchFsqData(props.index)}
        to={`${match.path}${sobaya.id}`}
      >
        Detail
      </Link>
      <Route
        path="/:id"
        render={props => <Detail {...props} sobaya={sobaya} />}
      />
    </div>
  );
}
