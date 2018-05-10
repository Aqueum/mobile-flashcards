import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { StackNavigator } from 'react-navigation';
import { TouchableOpacity, AsyncStorage } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createStore } from 'redux';
import DeckAdd from './DeckAdd';
import CardAdd from './CardAdd';
import DeckListView from './DeckListView';
import DeckView from './DeckView';
import QuizView from './QuizView';

// styling
const Page = styled.View`
  flex: 1;
  padding-top: 30px;
  background-color: white;
`;

const Header = styled.Text`
  color: black;
  text-align: left;
  margin-left: 5;
  font-size: 22;
`;

const Plus = styled.Text`
  color: gray;
  margin-right: 5;
  font-size: 36;
`;

// Navigation - defines available pages & their locations
const MainNavigator = StackNavigator({
  DeckListView: {
    screen: DeckListView
  },
  DeckView: {
    screen: DeckView
  },
  DeckAdd: {
    screen: DeckAdd
  },
  CardAdd: {
    screen: CardAdd
  },
  QuizView: {
    screen: QuizView
  },
  initialRouteName: 'DeckListView'
});

// Navbar, with + to add new deck
DeckListView.navigationOptions = ({ navigation }) => ({
  title: 'Decks',
  headerRight: (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DeckAdd');
      }}
    >
      <Plus>+</Plus>
    </TouchableOpacity>
  )
});

// FrontPage is a container for all navigable pages
class FrontPage extends React.Component {
  render() {
    return (
      <Page>
        <MainNavigator />
      </Page>
    );
  }
}

export default connect()(FrontPage);
