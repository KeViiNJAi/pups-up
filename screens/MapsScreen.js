import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Map from '../components/Map'

export default function MapsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Map />
    </ScrollView>
  );
}

MapsScreen.navigationOptions = {
  title: 'Dog Parks',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
