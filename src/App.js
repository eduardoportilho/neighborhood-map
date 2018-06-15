import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';
import { LocationList } from './LocationList';
import { SearchBar } from './SearchBar';

const LOCATIONS = [
  { name: "The Royal Palace", position: {lat: 59.326824, lng: 18.071720} },
  { name: "The ABBA Museum", position: {lat: 59.324896, lng: 18.096565} },
  { name: "Stockholm City Hall", position: {lat: 59.327453, lng: 18.054347} },
  { name: "Stortorget Square", position: {lat: 59.325023, lng: 18.070819} },
  { name: "Kungsträdgården", position: {lat: 59.330290, lng: 18.072186} },
  { name: "Moderna Museet", position: {lat: 59.326071, lng: 18.084705} },
]

export default class App extends Component {
  state = {
    locations: LOCATIONS
  }

  handleSearchChange = (query) => {
    this.setState({
      locations: LOCATIONS.filter((location) => {
        return location.name
          .toLowerCase()
          .indexOf(query.toLowerCase()) >= 0
      })
    })
  }

  render() {
    const { locations } = this.state 
    return (
      <main>
        <MapContainer locations={locations} />
        <SearchBar onChange={this.handleSearchChange} />
        <LocationList locations={locations} />
      </main>
    );
  }
}
