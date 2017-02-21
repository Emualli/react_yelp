import React from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import _ from 'lodash'

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    style={{height: '100%'}}
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  >
  </GoogleMap>
));

class MapContainer extends React.Component {
  render() {
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
