import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '100%',
};

class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 7.8731, lng: 80.7718 }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCHj4VxLtNyma73bLVGpb5XUfV82jUifdQ'
})(MapContainer);