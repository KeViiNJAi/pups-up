import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions, View } from 'react-native';
import firebase from 'firebase';
import Markers from './MarkersTest';

export default class Map extends Component {
  state = {};

  componentDidMount() {
    firebase
      .database()
      .ref('/')
      .once('value')
      .then(snapshot => {
        this.setState(snapshot.val());
      });
  }

  render() {
    console.log(`this state location in render`, this.state.location);
    if (!this.state.location) {
      return null;
    }
    return (
      <View style={styles.container}>
        {console.log('inside marker return')}
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 40.704903,
            longitude: -74.009157,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <Markers />
        </MapView>
      </View>
    );
  }
}

let { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: height,
    width: width
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  }
});
