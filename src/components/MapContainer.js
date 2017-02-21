import React from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import _ from 'lodash'

class MapContainer extends React.Component {
  render() {
    const GettingStartedGoogleMap = withGoogleMap(props => (
      <GoogleMap
        style={{height: '100%'}}
        ref={props.onMapLoad}
        defaultZoom={12}
        defaultCenter={{ lat: 48.823882, lng: 2.344922 }}
        onClick={props.onMapClick}
      >
      </GoogleMap>
    ));
    return (
      <div style={{height: `100%`}}>Map :
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
