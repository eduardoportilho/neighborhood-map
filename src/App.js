import React, { Component } from 'react';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './MapContainer';

export class App extends Component {
  render() {
    return (
      <MapContainer google={this.props.google} />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC36F_wsicCtp-z6Ci06ZWYrSmRIu4Wj9c'
})(App);
