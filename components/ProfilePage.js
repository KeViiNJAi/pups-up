import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class ProfilePage extends Component {
  render() {
    return (
      <View
      style={styles.container}
      >
        <ScrollView>
          <View style={styles.container}>
            <Image
              // style={{ width: 300, height: 300 }}
              source={require('../assets/images/theo.jpg')}
              style={styles.profileImg}
            />

            <Text style={styles.userInfoText}>Username: Theo.theSamoyed</Text>
            <Text style={styles.userInfoText}>Owner: Kevin</Text>
            <Text style={styles.userInfoText}>Name: Theodore</Text>
            <Text style={styles.userInfoText}>Breed: Samoyed</Text>
            <Text style={styles.userInfoText}>Home: New York, NY</Text>
            <Text style={styles.userInfoText}>Siblings: Avon, Quincy...</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

let { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: height,
    width: width
  },
  profileImg: {
    height: 250,
    width: 250,
    borderRadius: 250 / 2,
    borderWidth: 6,
    borderColor: '#87ceeb'
  },
  userInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  }
});
