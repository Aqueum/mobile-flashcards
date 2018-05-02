import React, { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const Page = styled.View`
  flex: 1;
`;

const Deck = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-top-color: lightgray;
  border-top-width: 2;
  padding-top: 20;
  padding-bottom: 20;
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

export default class DeckListView extends React.Component {
  render() {
    return (
      <Page>
        <FlatList
          data={this.props.decks}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Deck>
                <Title>{item.key}</Title>
                <Enumeration>{item.count} cards</Enumeration>
              </Deck>
            </TouchableOpacity>
          )}
        />
      </Page>
    );
  }
}
