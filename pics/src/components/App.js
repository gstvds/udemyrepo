import React from "react";

import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  // We set the default value of the state "images" as an empty array, so in the future we
  // will not have problems using functions made for arrays, like this.state.images.map
  state = { images: [] };

  // This is an async function. It means that it take some time to end running after it gets called
  // To get the result of this function, we use the async keyword. When we use the async keyword
  // it allows us to use the async-await syntax.
  // To use this syntax, we put the async keyword in front of the method name, then
  // find whatever is taking some time to resolve and we put the await keyword in front of it
  onSearchSubmit = async term => {
    // The get function gets two separated arguments. The first argument is
    // going to be the adress we want to make a get request. The second argument
    // is going to be an object with bunch of options to customize this request
    const response = await unsplash.get("/search/photos/", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
