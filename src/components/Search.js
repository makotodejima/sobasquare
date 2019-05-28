import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { store } from "../index";

const Search = props => {
  const sobayas = props.sobayas;
  const [input, updateInput] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(sobayas);
  }, [sobayas]);

  useEffect(() => {
    UpdateDisplayedResults(input);
  }, [input]);

  const handleChange = e => {
    updateInput(e.target.value);
  };

  const UpdateDisplayedResults = () => {
    setResults(
      sobayas.filter(function(s) {
        return (
          s.name.en.toLowerCase().match(input) ||
          s.address.toLowerCase().match(input) ||
          s.neighborhood.toLowerCase().match(input)
        );
      })
    );
    console.log(input);
    console.log(results);
  };

  return (
    <div>
      <>
        <input
          type="text"
          style={{ height: `2rem`, fontSize: "2rem" }}
          value={input}
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
    </div>
  );
};

const mapStateToProps = state => {
  return {
    sobayas: state.sobayas
  };
};

export default connect(mapStateToProps)(Search);
