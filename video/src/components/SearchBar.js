import "./VideoItem.css";

import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div
        style={{ background: "#7159C1" }}
        className='search-bar ui segment'
      >
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label
              className='label'
              style={{
                background: "#7159C1",
                color: "white",
                fontSize: "20px"
              }}
            >
              Search from YouTube
            </label>
            <input
              style={{ background: "#7159C1", color: "white" }}
              placeholder='Search'
              type='text'
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
