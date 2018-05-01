import React from 'react';
import DeckListView from './components/DeckListView';
import styled from 'styled-components';

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

export default class App extends React.Component {
  render() {
    return (
      <Page>
        <Header>Mobile Flashcards</Header>
        <DeckListView />
      </Page>
    );
  }
}
