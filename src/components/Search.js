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
    UpdateResults(input);
    if (input.length > 0) {
      props.toggleIsSearching(true);
    } else {
      props.toggleIsSearching(false);
    }
  }, [input]);

  useEffect(() => {
    props.updateSearchResults(results);
  }, [results]);

  const handleChange = e => {
    updateInput(e.target.value);
  };

  const UpdateResults = () => {
    setResults(
      sobayas.filter(function(s) {
        return (
          s.name.en.toLowerCase().match(input.toLowerCase()) ||
          s.address.toLowerCase().match(input.toLowerCase()) ||
          s.neighborhood.toLowerCase().match(input.toLowerCase())
        );
      })
    );
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
        {/* {results.length > 0 ? (
          <ul>
            {results.map(function(s) {
              return (
                <li key={s.name.en}>
                  {s.name.en} <a href="#">{s.name.jp}</a>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No Match!!</p>
        )} */}
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
