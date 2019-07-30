import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

class MapContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            places: [],
        }
    }
   /*  { latitude: 7.8731, longitude: 79.7718 },
    { latitude: 6.053519, longitude: 80.220978 },
    { latitude: 7.8731, longitude: 80.7718 }, */
    displayPlaces = () => {
        return this.state.places.map((place, index) => {
            return <Marker key={index} id={index} position={{
                lat: place.latitude,
                lng: place.longitude
            }}
                onClick={() => alert("clicked me!")} />
        })
    }

    componentDidMount(){
        fetch('https://qualonsavy.herokuapp.com/api/trackers/getAll')
        .then(res => res.json())
        .then(json => {
            this.setState({
                places: json,
            })
        });
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 7.8731, lng: 80.7718 }}
            >
                {this.displayPlaces()}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC2_OjDEi-KqIOPdBodS-Fm99GSQ0vTtA4'
})(MapContainer);

//AIzaSyCHj4VxLtNyma73bLVGpb5XUfV82jUifdQ  my one