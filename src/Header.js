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
        <div className="search-label">Filter:</div>
        <input className="search-field" type="text" onChange={this.handleSearchChange} />
      </header>
    )
  }
}