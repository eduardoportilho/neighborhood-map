import React, { Component } from 'react';
import SurroundingBusiness from './SurroundingBusiness';

export default class LocationList extends Component {
  render() {
    const { locations } = this.props
    return (
      <section>
      {locations.map((location, i) => (
        <div key={i}>
          <h2>{location.name}</h2>
          <SurroundingBusiness {...{location}} />
        </div>
      ))}
      </section>
    )
  }
}