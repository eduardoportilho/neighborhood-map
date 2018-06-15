import React, { Component } from 'react';

export class LocationList extends Component {
  render() {
    const { locations } = this.props
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
          </tr>
          {locations.map(location => (
            <tr>
              <td>{location.name}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}