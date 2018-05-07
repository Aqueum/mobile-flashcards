import React, { Component } from 'react';
import { AsyncStorage, Text, View, TextInput, StyleSheet } from 'react-native';

class AsyncTrial extends Component {
  state = {
    name: ''
  };
  componentDidMount() {
    console.log(this.state);
    AsyncStorage.getItem('name').then(value => this.setState({ name: value }));
    console.log(this.state);
  }

  setName = value => {
    AsyncStorage.setItem('name', value);
    this.setState({ name: value });
    console.log(this.state);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={this.setName}
        />
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}
export default AsyncTrial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
  textInput: {
    margin: 15,
    height: 35,
    width: 200,
    borderWidth: 1,
    backgroundColor: '#7685ed'
  }
});
