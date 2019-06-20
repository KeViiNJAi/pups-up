import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class ProfilePage extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Image
              style={{ width: 200, height: 300 }}
              source={require('../assets/images/theo.jpg')}
            />
          </View>
          {/* Will create DB for these fields */}
          <Text>Username: Theo.theSamoyed</Text>
          <Text>Owner: Kevin</Text>
          <Text>Name: Theodore</Text>
          <Text>Breed: Samoyed</Text>
          <Text>Home: New York, NY</Text>
          <Text>Siblings: Avon, Quincy...</Text>
        </ScrollView>
      </View>
    );
  }
}
