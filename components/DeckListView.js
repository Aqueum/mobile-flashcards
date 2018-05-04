import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { getDecks } from '../actions';

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

/*
const decks = [
  { key: 'old deck', count: 3 },
  { key: 'new deck', count: 2 },
  { key: 'green deck', count: 3 },
  { key: 'blue deck', count: 2 },
  { key: 'tinker deck', count: 3 },
  { key: 'taylor deck', count: 2 },
  { key: 'soldier deck', count: 3 },
  { key: 'spy deck', count: 2 },
  { key: 'next deck', count: 2 },
  { key: 'other deck', count: 2 }
];
*/

class DeckListView extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDecks());
  }
  render() {
    return (
      <Page>
        <FlatList
          data={decks}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Deck', {
                  item: item
                });
              }}
            >
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

const mapStateToProps = state => ({
  decks: state.decks || []
});

export default connect(mapStateToProps)(DeckListView);

/*



*/
