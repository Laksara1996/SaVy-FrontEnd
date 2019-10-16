import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, Polyline } from 'google-maps-react';

import { db } from '../Components/Firebase/Init';

//import Websocket from 'react-websocket';


const mapStyles = {
    width: '100%',
    height: '100%',
};

class MapContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            places: [],
            gpsPoints: [
                {
                    lat: '',
                    lng: ''
                }
            ]
        }
    }
    /*{ latitude: -35.27801, longitude: 79.7718 },
     { latitude: 6.053519, longitude: 80.220978 },
     { latitude: 7.8731, longitude: 80.7718 }, */
    displayPlaces = () => {

        return this.state.places.map((place, index) => {
            {console.log(place)}
            return <Marker
                key={index}
                id={index}
                position={{
                    lat: place.lat,
                    lng: place.lng
                }}
                onClick={this.onMarkerClick} />

        })
    }

    componentDidMount() {
        db.collection("GPSDummy")
            .onSnapshot((data) => {
                let maped = data.docs.map(doc => {
                    //console.log(doc.data());
                    return { ...doc.data(), id: doc.data().trackerID };
                })
                let gpsCoordinates = maped.map(coordinate => {
                    console.log(coordinate.gps)
                    return {
                        ...coordinate.gps
                    }
                })
                gpsCoordinates.map(point => {
                    let gpsPoint = {
                        lat: point._lat,
                        lng: point._long
                    }
                    this.setState({
                        places:[...this.state.places,gpsPoint]
                    })
                })
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
                    {/* {this.displayPlaces()} */}
                    <Polyline
                        path={this.state.places}
                        strokeColor="#0000FF"
                        strokeOpacity={0.8}
                        strokeWeight={2} />
                </Map>
            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAQ4Tc3rcGjJt9Q6T-qdF3-CBxrof_xhT8'
})(MapContainer);

//AIzaSyA63LvAPje4E-ftTpMNGh4Al6ySp1e27xc  earlier one
//AIzaSyC2_OjDEi-KqIOPdBodS-Fm99GSQ0vTtA4  my one
