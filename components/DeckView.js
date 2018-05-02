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

const Enumeration = styled.Text`
  color: grey;
  font-size: 14;
  text-align: center;
`;

class DeckView extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const item = params ? params.item : null;
    return (
      <Page>
        <Title>{item.key}</Title>
        <Enumeration>{item.count} cards</Enumeration>
      </Page>
    );
  }
}

export default DeckView;