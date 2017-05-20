import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

export default class RandomNumber extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Gerador de Números
        </Text>
        <Text style={styles.instructions}>
          Iniciando
        </Text>
        <Text style={styles.instructions}>
          Vamos lá!
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('RandomNumber', () => RandomNumber);
