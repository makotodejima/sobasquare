import React, { useState } from "react";
import { connect } from "react-redux";
import { store } from "../index";

const Search = props => {
  const [input, updateInput] = useState("");

  const handleChange = e => {
    updateInput(e.target.value);
  };

  const { sobayas } = props;
  let results = [];
  var searchString = input.trim().toLowerCase();

  if (sobayas.length > 0) {
    results = sobayas;
  }

  if (searchString.length > 0) {
    // Filter the results.
    results = sobayas.filter(function(s) {
      return (
        s.name.en.toLowerCase().match(searchString) ||
        s.address.toLowerCase().match(searchString) ||
        s.neighborhood.toLowerCase().match(searchString)
      );
    });
  }

  return (
    <div>
      {sobayas.length > 0 ? (
        <>
          <input
            type="text"
            style={{ height: `2rem`, fontSize: "2rem" }}
            value={searchString}
            onChange={e => {
              handleChange(e);
            }}
            placeholder="Type here"
          />

          <ul>
            {results.map(function(s) {
              return (
                <li key={s.name.en}>
                  {s.name.en} <a href="#">{s.name.jp}</a>
                </li>
              );
            })}
          </ul>
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    sobayas: state.sobayas
  };
};

export default connect(mapStateToProps)(Search);
