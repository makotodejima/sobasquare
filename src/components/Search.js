import React from "react";
import { connect } from "react-redux";

class Search extends React.Component {
  state = { searchString: "" };

  handleChange = e => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    let items = [];
    var searchString = this.state.searchString.trim().toLowerCase();
    const { sobayas } = this.props;

    if (sobayas.length > 0) {
      items = sobayas.map(sobaya => sobaya.name.en);
    }

    if (searchString.length > 0) {
      // We are searching. Filter the results.

      items = items.filter(function(i) {
        return i.toLowerCase().match(searchString);
      });
    }

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
              {items.map(function(i) {
                return (
                  <li key={i}>
                    {i} <a href={i}>{i}</a>
                  </li>
                );
              })}
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
