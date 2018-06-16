import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const GAMLA_STAN_POS = {
  center: {lat: 59.325027, lng: 18.070802},
  zoom: 15,
}

export class MapContainer extends Component {

  onMarkerClick = (location, onLocationSelected) => (props, marker) => {
    onLocationSelected(location)
  }

  onInfoWindowClose = () => {
    const { onLocationSelected } = this.props
    onLocationSelected(undefined)
  }

  onMapClicked = () => {
    const { onLocationSelected } = this.props
    onLocationSelected(undefined)
  }

  render() {
    const { google, selectedLocation, onLocationSelected } = this.props
    return (
        <Map 
          google={this.props.google} 
          zoom={GAMLA_STAN_POS.zoom}
          initialCenter={GAMLA_STAN_POS.center}
          style={{ height: '100%', position: 'relative', width: '100%' }}
          onClick={this.onMapClicked}
          className="map"
        >
          {this.props.locations.map((location, i) => {
            const label = selectedLocation === location ? {
              text: location.name,
              fontSize: '16px',
              fontWeight: 'bold',
              color: 'darkred',
            } : {
              text: location.name,
              fontSize: '14px',
              fontWeight: 'normal',
              color: 'darkred',
            }
            return (
                <Marker
                  key={i}
                  title={location.name}
                  onClick={this.onMarkerClick(location, onLocationSelected)}
                  icon={{
                    url: "marker.svg",
                    scaledSize: new google.maps.Size(32, 32),
                    labelOrigin: new google.maps.Point(12, -10),
                  }}
                  label={label}
                  position={location.position}
                />
            )
          })}

        </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer)
