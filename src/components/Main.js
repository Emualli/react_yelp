require('normalize.css/normalize.css')
require('styles/App.css')
import React from 'react'
import MapContainer from 'components/MapContainer'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="notice" style={{ height: 1000}}><MapContainer /></div>
      </div>
    );
  }
}

export default AppComponent
