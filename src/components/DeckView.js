import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import navigationOptions from 'react-navigation';
import {
  clearLocalNotification,
  setLocalNotification
} from '../utils/notifications';
import { getDeck } from '../utils/api';
import { connect } from 'react-redux';
import {
  Page,
  TitleBox,
  Title,
  Enumeration,
  Button,
  ButtonTxt
} from '../style';

// Page that shows an individual deck
// and gives the options to start a quiz or add a new question card
class DeckView extends Component {
  static navigationOptions = {
    title: 'Deck'
  };

  render() {
    const { item } = this.props;
    return (
      <Page>
        <TitleBox>
          <Title>{item.title}</Title>
          <Enumeration>
            {item.questions === undefined ? 0 : item.questions.length} cards
          </Enumeration>
        </TitleBox>
        <Button
          onPress={() => {
            clearLocalNotification().then(setLocalNotification);
            this.props.navigation.navigate('QuizView', {
              item: item
            });
          }}
        >
          <ButtonTxt>Start a Quiz</ButtonTxt>
        </Button>
        <Button
          onPress={() => {
            this.props.navigation.navigate('CardAdd', {
              item: item
            });
          }}
        >
          <ButtonTxt>Create New Question</ButtonTxt>
        </Button>
      </Page>
    );
  }
}

function mapStateToProps(state, { navigation }) {
  const title = navigation.state.params.title;
  return { item: state.decks[title] || {} };
}

export default connect(mapStateToProps)(DeckView);
