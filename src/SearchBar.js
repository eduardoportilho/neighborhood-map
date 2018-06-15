import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleSearchChange = (event) => {
    const { onChange } = this.props
    const query = event.target.value
    onChange(query)
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleSearchChange} />
      </div>
    );
  }
}