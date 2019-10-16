import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
//import Websocket from 'react-websocket';
import BusImage from '../Assests/Bus.png';
import { db } from '../Components/Firebase/Init';

const mapStyles = {
    width: '100%',
    height: '100%',
};

class MapContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            places: [],
            latestPlaces: [],
            count: 0
        }
    }

    /*{ latitude: 7.8731, longitude: 79.7718 },
     { latitude: 6.053519, longitude: 80.220978 },
     { latitude: 7.8731, longitude: 80.7718 }, */

    onMarkerClick = (props, marker, e, lat, lng) => {
        //console.log(this.state.Markerlat);
        this.setState({
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
    displayPlaces = () => {

        return this.state.places.map((place, index) => {
            { console.log(place) }
            return <Marker
                key={index}
                id={index}
                position={{
                    lat: place.gps._lat,
                    lng: place.gps._long
                }}
                icon={BusImage}
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

    /*componentDidMount() {
        fetch('http://qualonsavy.herokuapp.com/api/tracker/getLiveData/Tr0')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    places: json,
                })
            });
    } */

    componentDidMount() {
        db.collection("GPSDummy")
            .onSnapshot((data) => {
                let maped = data.docs.map(doc => {
                    //console.log(doc.data());
                    return { ...doc.data(), id: doc.data().trackerID };
                })
                this.setState({
                    places: [...maped],
                    //latestPlaces: [...maped]
                });
                //console.log(this.state.places);
            })
    }

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
    apiKey: 'AIzaSyAQ4Tc3rcGjJt9Q6T-qdF3-CBxrof_xhT8'
})(MapContainer);

//AIzaSyCHj4VxLtNyma73bLVGpb5XUfV82jUifdQ  my one
