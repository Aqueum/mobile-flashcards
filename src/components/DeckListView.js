import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, TouchableOpacity, AsyncStorage } from 'react-native';
import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions';
import { Page, Deck, Title, Enumeration } from '../style';

// Homepage that shows all decks and the number of cards (Q&A's) they contain
// hydrates app from AsyncStorage on mount
// inspited by https://stackoverflow.com/questions/45539619/react-convert-props-objects-into-array-then-setstate
// & https://medium.com/react-native-development/how-to-use-the-flatlist-component-react-native-basics-92c482816fe6
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
          data={Object.values(this.props.deckData)}
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
          keyExtractor={item => item.title}
        />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  deckData: state.decks || []
});

export default connect(mapStateToProps)(DeckListView);
