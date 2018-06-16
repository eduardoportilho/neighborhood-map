import React, { Component } from 'react';

export default class SideBar extends Component {
  render() {
    const { locations } = this.props
    return (
      <section className="sidebar">
        <h1 className="logo">Neighborhood Map</h1>
        {locations.map((location, i) => (
          <div key={i} className="sidebar-entry">
           <h3>{location.name}</h3>
          </div>
        ))}
      </section>
    )
  }
}