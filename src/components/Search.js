import React from "react";

// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [
//         "Makoto Dejima",
//         "Masato Dejima",
//         "John Doe",
//         "Peter Windolf",
//         "Wren Phenix"
//       ]
//     };
//   }
//   render() {
//     return (
//       <section>
//         <ul>
//           {this.state.list.map(i => (
//             <li key={i}>{i}</li>
//           ))}
//         </ul>
//       </section>
//     );
//   }
// }

// Let's create a "real-time search" component

// var items = [
//   { name: "Backbone.js", url: "https://documentcloud.github.io/backbone/" },
//   { name: "AngularJS", url: "https://angularjs.org/" },
//   { name: "jQuery", url: "https://jquery.com/" },
//   { name: "Prototype", url: "http://www.prototypejs.org/" },
//   { name: "React", url: "https://facebook.github.io/react/" },
//   { name: "Ember", url: "http://emberjs.com/" },
//   { name: "Knockout.js", url: "https://knockoutjs.com/" },
//   { name: "Dojo", url: "http://dojotoolkit.org/" },
//   { name: "Mootools", url: "http://mootools.net/" },
//   { name: "Underscore", url: "https://documentcloud.github.io/underscore/" },
//   { name: "Lodash", url: "http://lodash.com/" },
//   { name: "Moment", url: "https://momentjs.com/" },
//   { name: "Express", url: "http://expressjs.com/" },
//   { name: "Koa", url: "http://koajs.com/" }
// ];

class Search extends React.Component {
  state = { searchString: "" };

  handleChange = e => {
    // If you comment out this line, the text box will not change its value.
    // This is because in React, an input cannot change independently of the value
    // that was assigned to it. In our case this is this.state.searchString.

    this.setState({ searchString: e.target.value });
  };

  render() {
    // var libraries = this.props.items,
    console.log(this.props.items);
    // var items = [],
    var searchString = this.state.searchString.trim().toLowerCase();

    if (this.props.items.length > 0) {
      var items = [this.props.items[0].name.en, this.props.items[5].name.en];
    }

    if (searchString.length > 0) {
      // We are searching. Filter the results.

      items = items.filter(function(i) {
        return i.toLowerCase().match(searchString);
      });
    }

    return (
      <div>
        {this.props.items.length > 0 ? (
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

export default Search;
