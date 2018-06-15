import React, { Component } from 'react';

export class LocationList extends Component {
  render() {
    const { locations } = this.props
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location, i) => (
              <tr key={i}>
                <td>{location.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}