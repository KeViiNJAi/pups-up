import React, { Component } from 'react';
import MapView, { Callout, Marker, AnimatedRegion, Animated } from 'react-native-maps';
import { Text, StyleSheet, Dimensions, View } from 'react-native';

export default class Map extends Component {

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 40.726456,
            longitude: -73.981069,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <Marker
            coordinate={{
              latitude: 40.726456,
              longitude: -73.981069
            }}
          >
            <Callout>
              <Text>Tompkins Square Dog Run</Text>
              <Text>There are 17 dogs at the park right now!</Text>
            </Callout>
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
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  }
});
