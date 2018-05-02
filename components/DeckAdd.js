import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const Page = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  color: black;
  font-size: 20;
  text-align: center;
`;

class DeckAdd extends Component {
  render() {
    return (
      <Page>
        <Title>Add a new deck</Title>
      </Page>
    );
  }
}

export default DeckAdd;
