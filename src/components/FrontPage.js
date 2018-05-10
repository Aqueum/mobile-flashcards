import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { TouchableOpacity, AsyncStorage } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createStore } from 'redux';
import DeckAdd from './DeckAdd';
import CardAdd from './CardAdd';
import DeckListView from './DeckListView';
import DeckView from './DeckView';
import QuizView from './QuizView';
import { MainPage, Header, Plus } from '../style';

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
const FrontPage = () => {
  return (
    <MainPage>
      <MainNavigator />
    </MainPage>
  );
};

export default connect()(FrontPage);
