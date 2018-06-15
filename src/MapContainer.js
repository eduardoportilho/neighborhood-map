import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'


const GAMLA_STAN_POS = {
  center: {lat: 59.325027, lng: 18.070802},
  zoom: 15,
}

export class MapContainer extends Component {
  render() {
    const { google } = this.props
    const style = {
      width: '100vw',
      height: '75vh',
      position: 'relative',
    }

    return (
      <div {...{style}}>
        <Map 
          google={this.props.google} 
          zoom={GAMLA_STAN_POS.zoom}
          initialCenter={GAMLA_STAN_POS.center}
          { ...{style}}
        >
          {this.props.locations.map((location, i) => {
            return (
                <Marker
                  key={i}
                  title={location.name}
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
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC36F_wsicCtp-z6Ci06ZWYrSmRIu4Wj9c'
})(MapContainer)
