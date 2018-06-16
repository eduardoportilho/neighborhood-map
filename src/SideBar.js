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
        <h1 className="logo">Neighborhood Map</h1>
        {locations.map((location, i) => {
          const className = location === selectedLocation ? 'sidebar-entry selected' : 'sidebar-entry'
          return (
            <div key={i} className={className} onClick={this.onLocationClick(location)}>
              <h3>{location.name}</h3>
            </div>
          )
        })}
      </section>
    )
  }
}