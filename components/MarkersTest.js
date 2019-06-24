import React, { Component } from 'react';
import MapView, {
  Callout,
  Marker,
} from 'react-native-maps';
import { Text, View } from 'react-native';
import firebase from 'firebase';

export default class Markers extends Component {
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
    if (!this.state.location) {
      return null;
    }
    return (
      <View>
        <Marker
          coordinate={{
            latitude: this.state.location.location1.coords.latitude,
            longitude: this.state.location.location1.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location1.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location1.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location2.coords.latitude,
            longitude: this.state.location.location2.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location2.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location2.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location3.coords.latitude,
            longitude: this.state.location.location3.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location3.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location3.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location4.coords.latitude,
            longitude: this.state.location.location4.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location4.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location4.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location5.coords.latitude,
            longitude: this.state.location.location5.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location5.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location5.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location6.coords.latitude,
            longitude: this.state.location.location6.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location6.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location6.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location7.coords.latitude,
            longitude: this.state.location.location7.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location7.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location7.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location8.coords.latitude,
            longitude: this.state.location.location8.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location8.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location8.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location9.coords.latitude,
            longitude: this.state.location.location9.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location9.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location9.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location10.coords.latitude,
            longitude: this.state.location.location10.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location10.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location10.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location11.coords.latitude,
            longitude: this.state.location.location11.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location11.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location11.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location12.coords.latitude,
            longitude: this.state.location.location12.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location12.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location12.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location13.coords.latitude,
            longitude: this.state.location.location13.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location13.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location13.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location14.coords.latitude,
            longitude: this.state.location.location14.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location14.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location14.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location15.coords.latitude,
            longitude: this.state.location.location15.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location15.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location15.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location16.coords.latitude,
            longitude: this.state.location.location16.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location16.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location16.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location17.coords.latitude,
            longitude: this.state.location.location17.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location17.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location17.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location18.coords.latitude,
            longitude: this.state.location.location18.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location18.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location18.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location19.coords.latitude,
            longitude: this.state.location.location19.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location19.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location19.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: this.state.location.location20.coords.latitude,
            longitude: this.state.location.location20.coords.longitude
          }}
        >
          <Callout>
            <Text>{this.state.location.location20.name}</Text>
            <Text>
              {`There are ${
                this.state.location.location20.numOfPets
              } dogs at the park right now!`}
            </Text>
          </Callout>
        </Marker>
      </View>
    );
  }
}
