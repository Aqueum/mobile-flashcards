import React from 'react';
import styled from 'styled-components';
import { StackNavigator } from 'react-navigation';
import DeckListView from './components/DeckListView';
import DeckView from './components/DeckView';
import { YellowBox, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

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

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckListView,
    navigationOptions: {
      title: 'Decks',
      headerRight: (
        <TouchableOpacity onPress={() => alert('This is a button!')}>
          <FontAwesome
            name="plus"
            size={30}
            color={'#888'}
            padding-right={10}
            px
          />
        </TouchableOpacity>
      )
    }
  },
  Deck: {
    screen: DeckView
  },
  initialRouteName: 'Home'
});

export default class App extends React.Component {
  render() {
    return (
      <Page>
        <MainNavigator />
      </Page>
    );
  }
}
