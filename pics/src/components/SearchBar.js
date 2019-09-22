import React from "react";

class SearchBar extends React.Component {
  // event.target.value is used to get the value of an input
  // Common names to this function: on... or handle...
  // handleInputChange(event) {}
  // We can abbreviate "event" with just "e"
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            {/* Here we leave the parenthesis off to make sure the function
			onInputChange will be called only when we got an inputChange. If
			we use onInputChange(), this function will be automatic called 
			whenever the render function starts */}
          </div>
        </form>
      </div>
    );
  }
}

// Users clicks on something: onClick
// Users changes text in an input: onChange
// Users submits a form: onSubmit

export default SearchBar;
