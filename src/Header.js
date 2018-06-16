import React, { Component } from 'react';

export default class Header extends Component {

  handleSearchChange = (event) => {
    const { onChange } = this.props
    const query = event.target.value
    onChange(query)
  }
  
  render() {
    return (
      <header className="header">
        <h1 className="logo">Neighborhood Map</h1>
        <label className="search-label" htmlFor="search-field">Filter:</label>
        <input id="search-field" className="search-field" type="text" role="search" onChange={this.handleSearchChange} />
      </header>
    )
  }
}