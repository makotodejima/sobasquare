import React from "react";

const Detail = props => {
  const { sobayas, match } = props;
  const { name, neighborhood, address, recommendation } = sobayas[
    match.params.id
  ];
  return (
    <div>
      <p>{name.jp}</p>
      <p>{name.en}</p>
      <p>{neighborhood}</p>
      <p>{recommendation}</p>
      <p>{address}</p>
    </div>
  );
};

export default Detail;
