import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class MapGoogle extends Component {
 render() {
 return (
 <div className="map-container">
  <Map google={this.props.google} zoom={14} className="map">
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
     
 </InfoWindow>
</Map>
 </div>
 );
 }
}
/*export default MapGoogle;*/
export default GoogleApiWrapper({
    apiKey: ("AIzaSyAGWHx-ps1ofCE3wdfHW4rrxoFxSz7PFpw")
  })(MapGoogle)