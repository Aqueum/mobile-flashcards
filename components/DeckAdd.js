import React, { Component } from 'react';
import { TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components';
import { saveDeckTitle, getDecks } from '../utils/api';

const Page = styled.View`
  flex: 1;
`;

const Prompt = styled.Text`
  color: black;
  font-size: 18;
  text-align: left;
  margin-left: 5;
  margin-top: 5;
`;

const Submit = styled.Text`
  color: blue;
  font-size: 18;
  text-align: right;
  margin-right: 5;
  margin-top: 5;
`;

class DeckAdd extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  render() {
    return (
      <Page>
        <Prompt>Enter new deck title:</Prompt>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            padding: 10
          }}
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
          onSubmitEditing={title => saveDeckTitle({ title })}
        />
      </Page>
    );
  }
}

export default DeckAdd;
