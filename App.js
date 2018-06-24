import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import image from './logo-blue-side.png';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { text: '' };
  }

  handleChange = (text) => {
    const name = text.length ? ` ${text}.` : '';
    this.setState({
      text: name,
    });
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#fff',
      },
      image: {
        width: 150,
        height: 100,
        resizeMode: 'contain',
      },
    });
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={image}
            style={styles.image}
          />
        </View>
        <View>
          <Text>Hello, my name is{this.state.text}</Text>
          <TextInput
            onChangeText={this.handleChange}
          />
        </View>
      </View>
    );
  }
}
