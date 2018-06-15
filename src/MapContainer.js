import React, { Component } from 'react';
import ReactDOM from 'react-dom'

const GAMLA_STAN_POS = {
  center: {lat: 59.325027, lng: 18.070802},
  zoom: 15,
}

export default class MapContainer extends Component {
  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    const { google } = this.props;
    const maps = google.maps;
    const mapRef = this.refs.map;
    const node = ReactDOM.findDOMNode(mapRef);
    this.map = new maps.Map(node, GAMLA_STAN_POS);
  }

  render() {
    const style = {
      width: '100vw',
      height: '75vh'
    }

    return (
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}
