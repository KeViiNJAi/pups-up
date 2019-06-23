import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';

export default class ProfilePage extends Component {
  //new syntax to avoid having to use constructor function
  state = {}

  componentDidMount() {
    firebase
      .database()
      .ref('/')
      .once('value')
      .then((snapshot) => {
        this.setState(snapshot.val());
        console.log(snapshot.val())
      });
    }

  render() {
    if (!this.state.users){
      return null
    }
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={require('../assets/images/theo.jpg')}
              style={styles.profileImg}
            />

            <Text style={styles.userInfoText}>Username: {this.state.users.user1.username}</Text>
            <Text style={styles.userInfoText}>Owner: {this.state.users.user1.name}</Text>
            <Text style={styles.userInfoText}>Name: {this.state.pets.pet1.name}</Text>
            <Text style={styles.userInfoText}>Breed: {this.state.pets.pet1.breed}</Text>
            <Text style={styles.userInfoText}>Home: {this.state.users.user1.city}</Text>
            <Text style={styles.userInfoText}>Friends: {this.state.pets.pet2.name}</Text>
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
    textAlign: 'center'
  }
});
