import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, TouchableOpacity, AsyncStorage } from 'react-native';
import styled from 'styled-components';
import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions';

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

class DeckListView extends Component {
  componentDidMount() {
    getDecks().then(decks =>
      this.props.dispatch(receiveDecks(JSON.parse(decks)))
    );
  }
  render() {
    return (
      <Page>
        <FlatList
          data={Object.values(this.props.deckData)} // https://stackoverflow.com/questions/45539619/react-convert-props-objects-into-array-then-setstate
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('DeckView', {
                  title: item.title
                });
              }}
            >
              <Deck>
                <Title>{item.title}</Title>
                <Enumeration>
                  {item.questions === undefined ? 0 : item.questions.length}{' '}
                  cards
                </Enumeration>
              </Deck>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.title} // TODO: enforce unique titles on data entry // https://medium.com/react-native-development/how-to-use-the-flatlist-component-react-native-basics-92c482816fe6
        />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  deckData: state.decks || []
});

export default connect(mapStateToProps)(DeckListView);
