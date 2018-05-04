import React from 'react';
import styled from 'styled-components';
import { StackNavigator } from 'react-navigation';
import { YellowBox, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createStore } from 'redux';
import DeckAdd from './DeckAdd';
import DeckListView from './DeckListView';
import DeckView from './DeckView';

//https://github.com/react-navigation/react-navigation/issues/3956#issuecomment-380648083
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);

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

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckListView
  },
  Deck: {
    screen: DeckView
  },
  AddDeck: {
    screen: DeckAdd
  },
  initialRouteName: 'Home'
});

DeckListView.navigationOptions = ({ navigation }) => ({
  title: 'Decks',
  headerRight: (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('AddDeck');
      }}
    >
      <Plus>+</Plus>
    </TouchableOpacity>
  )
});

export default class FrontPage extends React.Component {
  render() {
    return (
      <Page>
        <MainNavigator />
      </Page>
    );
  }
}
