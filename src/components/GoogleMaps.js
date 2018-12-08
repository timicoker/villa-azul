import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 19.775576,
      lng: 70.449175
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyBfmumQU9Q5W6k4378ZP6z1CgRCX9yhyyQ' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={19.775576}
            lng={70.449175}
            text={'Surf Blue Villa'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;