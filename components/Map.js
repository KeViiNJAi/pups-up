import React, { Component } from 'react';
import MapView, { Callout, Marker, AnimatedRegion, Animated } from 'react-native-maps';
import { Text, StyleSheet, Dimensions, View } from 'react-native';

export default class Map extends Component {
  // getInitialState(){
  //   return {
  //     region: new AnimatedRegion({
  //       latitude: 40.704850,
  //       longitude: -74.009293,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     })
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 40.70485,
            longitude: -74.009293,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <Marker
            coordinate={{
              latitude: 40.70485,
              longitude: -74.009293
            }}
          >
            <Callout>
              <Text>FSA NYC: No dogs allowed without documentation.</Text>
            </Callout>
            {/* <View style={{ backgroundColor: 'red', padding: 10 }}>
              <Text>NY</Text>
            </View> */}
          </Marker>
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
    //  ...StyleSheet.absoluteFillObject,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  }
});
