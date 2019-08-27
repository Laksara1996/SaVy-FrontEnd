import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
//import Websocket from 'react-websocket';

const mapStyles = {
    width: '100%',
    height: '100%',
};

class MapContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            places: [
                { latitude: 7.8731, longitude: 79.7718 },
                { latitude: 6.053519, longitude: 80.220978 },
                { latitude: 7.8731, longitude: 80.7718 }
            ],
            Markerlat: "Bus",
            Markerlng: "",
        }
    }

    /*{ latitude: 7.8731, longitude: 79.7718 },
     { latitude: 6.053519, longitude: 80.220978 },
     { latitude: 7.8731, longitude: 80.7718 }, */

    onMarkerClick = (props, marker, e, lat, lng) => {
        console.log(this.state.Markerlat);
        this.setState({
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    displayPlaces = () => {
        //console.log(this.state.places);
        return this.state.places.map((place, index) => {
            return <Marker
                key={index}
                id={index}
                position={{
                    lat: place.latitude,
                    lng: place.longitude
                }}
                onClick={this.onMarkerClick} />

        })
    }

    /* handleData(data) {
        let result = JSON.parse(data);
        console.log(result);
        this.setState({
            places: result,
            //count: this.state.count + result.movement
        });
    } */

    /* componentDidMount() {
        fetch('https://qualonsavy.herokuapp.com/api/trackers/getAll')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    places: json,
                })
            });
    } */

    render() {
        return (
            <div>
                {/* <Websocket url='ws://demos.kaazing.com/echo' // ws://qualonsavy.herokuapp.com/api/trackers/getAll
                    onMessage={this.handleData.bind(this)}
                /> */}
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 7.8731, lng: 80.7718 }}
                >
                    {this.displayPlaces()}
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.Markerlat}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA63LvAPje4E-ftTpMNGh4Al6ySp1e27xc'
})(MapContainer);

// //AIzaSyCHj4VxLtNyma73bLVGpb5XUfV82jUifdQ  my one

/* import React, { Component } from "react"
import { compose } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {

  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 29.5, lng: -95 }}>
      {props.markers.map(marker => {
        const onClick = props.onClick.bind(this, marker)
        return (
          <Marker
            key={marker.id}
            onClick={onClick}
            position={{ lat: marker.latitude, lng: marker.longitude }}
          >
            {props.selectedMarker === marker &&
              <InfoWindow>
                <div>
                  {marker.shelter}
                </div>
              </InfoWindow>}
            }
          </Marker>
        )
      })}
    </GoogleMap>
  )
})

export default class ShelterMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shelters: [],
      selectedMarker: null
    }
  }
  componentDidMount() {
    fetch("https://api.harveyneeds.org/api/v1/shelters?limit=20")
      .then(r => r.json())
      .then(data => {
        this.setState({ shelters: data.shelters })
      })
  }
  handleClick = (marker, event) => {
    console.log({ marker });
    console.log( this.state.shelters );
    this.setState({ selectedMarker: marker })
  }
  render() {
    return (
      <MapWithAMarker
        selectedMarker={this.state.selectedMarker}
        markers={this.state.shelters}
        onClick={this.handleClick}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
} */