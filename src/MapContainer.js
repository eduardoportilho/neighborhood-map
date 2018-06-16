import React, { Component } from 'react'
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react'

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
    const showingInfoWindow = !!selectedLocation

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
                  label={{
                    text: location.name,
                    color: 'darkred',
                  }}
                  position={location.position}
                />
            )
          })}

          <InfoWindow
            position={selectedLocation && selectedLocation.position}
            onClose={this.onInfoWindowClose}
            visible={showingInfoWindow}>
            <div>
              <h1>{selectedLocation && selectedLocation.name}</h1>
            </div>
          </InfoWindow>

        </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer)
