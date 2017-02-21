import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import _ from 'lodash'

class MapContainer extends React.Component {
  render() {
    const GettingStartedGoogleMap = withGoogleMap(props => (
      <GoogleMap
        style={{width: '100%', height: '100%'}}
        ref={props.onMapLoad}
        defaultZoom={3}
        defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
        onClick={props.onMapClick}>
      </GoogleMap>
    ));
    return (
      <div style={{width: '100%', height: '100%'}}>Map :
        <GettingStartedGoogleMap
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapLoad={_.noop}
        />
      </div>
    )
  }
}

export default MapContainer
