import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';
import SideBar from './SideBar';
import Header from './Header';
import LocationInfo from './LocationInfo';

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
    locations: LOCATIONS,
    selectedLocation: undefined,
  }

  onSearchChange = (query) => {
    this.setState({
      selectedLocation: undefined,
      locations: LOCATIONS.filter((location) => {
        return location.name
          .toLowerCase()
          .indexOf(query.toLowerCase()) >= 0
      })
    })
  }

  onLocationSelected = (selectedLocation) => {
    this.setState({
      selectedLocation
    })
  }

  render() {
    const { locations, selectedLocation } = this.state 
    return (
      <div className="wrapper">
        <SideBar {...{locations, selectedLocation}} onLocationSelected={this.onLocationSelected} />
        <div className="content">
          <Header onChange={this.onSearchChange} />
          <MapContainer {...{locations, selectedLocation}} onLocationSelected={this.onLocationSelected}/>
        </div>
        {selectedLocation && (
          <LocationInfo location={selectedLocation} />
        )}
      </div>
    );
  }
}
