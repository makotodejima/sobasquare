import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import sobayas from "../data/sobaya.js";

const Detail = ({ match }) => {
  const { name, neighborhood, address, recommendation, fsq } = sobayas[
    match.params.id
  ];

  return (
    <div>
      <p>rendered</p>
      <p>{name.en}</p>
      <p>{neighborhood}</p>
      <p>{recommendation}</p>
      <p>{address}</p>
      <p>{fsq}</p>

      {/*  Likes count, rating in the colored box */}

      <Link to="/">back</Link>
    </div>
  );
};

export default Detail;
