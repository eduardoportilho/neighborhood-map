import React, { Component } from 'react';
import ReactDOM from 'react-dom'

const GAMLA_STAN_POS = {
  center: {lat: 59.325027, lng: 18.070802},
  zoom: 15,
}
const LOCATIONS = [
  { name: "The Royal Palace", position: {lat: 59.326824, lng: 18.071720} },
  { name: "The ABBA Museum", position: {lat: 59.324896, lng: 18.096565} },
  { name: "Stockholm City Hall", position: {lat: 59.327453, lng: 18.054347} },
  { name: "Stortorget Square", position: {lat: 59.325023, lng: 18.070819} },
  { name: "Kungsträdgården", position: {lat: 59.330290, lng: 18.072186} },
  { name: "Moderna Museet", position: {lat: 59.326071, lng: 18.084705} },
]

export default class MapContainer extends Component {
  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    const { google: { maps} } = this.props;
    const mapRef = this.refs.map;
    const node = ReactDOM.findDOMNode(mapRef);
    this.map = new maps.Map(node, GAMLA_STAN_POS);

    LOCATIONS.forEach( location => {
      new maps.Marker({
        position:location.position,
        map: this.map,
        label: location.name,
      });
    });
  }

  render() {
    const style = {
      width: '100vw',
      height: '75vh',
    }

    return (
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}
