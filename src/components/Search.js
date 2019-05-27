import React from "react";
import { connect } from "react-redux";
import { store } from "../index";

class Search extends React.Component {
  state = { searchString: "" };

  handleChange = e => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    const { sobayas } = this.props;
    let results = [];
    var searchString = this.state.searchString.trim().toLowerCase();

    if (sobayas.length > 0) {
      results = sobayas;
    }

    if (searchString.length > 0) {
      // Filter the results.
      results = sobayas.filter(function(s) {
        return s.name.en.toLowerCase().match(searchString);
      });
    }
    // store.dispatch({ type: "SET_SOBAYAS", sobayas: results });

    return (
      <div>
        {sobayas.length > 0 ? (
          <>
            <input
              type="text"
              value={this.state.searchString}
              onChange={this.handleChange}
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
              <button
                onClick={() =>
                  store.dispatch({ type: "SET_SOBAYAS", sobayas: results })
                }
              >
                search
              </button>
            </ul>
          </>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sobayas: state.sobayas
  };
};

export default connect(mapStateToProps)(Search);
