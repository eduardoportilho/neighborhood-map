import React, { Component } from 'react';

export default class SideBar extends Component {

  onLocationClick = (location) => () => {
    const { onLocationSelected, selectedLocation } = this.props
    const newSelectedLocation = selectedLocation === location ? undefined : location
    onLocationSelected(newSelectedLocation)
  }
  
  render() {
    const { selectedLocation, locations } = this.props
    return (
      <section className="sidebar">
        <h2>Locations</h2>
        <ul aria-label="Location list">
        {locations.map((location, i) => {
          const className = location === selectedLocation ? 'sidebar-entry selected' : 'sidebar-entry'
          return (
            <li key={i} className={className}>
              <a href="#" onClick={this.onLocationClick(location)}>
                <h3>{location.name}</h3>
              </a>
            </li>
          )
        })}
        </ul>
      </section>
    )
  }
}