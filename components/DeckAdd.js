import React, { Component } from 'react';
import { TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components';
import navigationOptions from 'react-navigation';
import { connect } from 'react-redux';
import { saveDeckTitle } from '../utils/api';
import { addDeck } from '../actions';

// styling
const Page = styled.View`
  flex: 1;
`;

const Prompt = styled.Text`
  color: black;
  font-size: 18;
  text-align: left;
  margin-left: 5;
  margin-top: 5;
`;

const Input = styled.TextInput`
  height: 40;
  border-color: gray;
  border-width: 1;
  margin: 10px;
  padding: 10px;
`;

const Submit = styled.Text`
  color: blue;
  font-size: 18;
  text-align: right;
  margin-right: 5;
  margin-top: 5;
`;

// Page where new deck title is entered to create a new deck
class DeckAdd extends Component {
  state = { title: '' };

  onSubmitEdit = () => {
    const { title } = this.state;
    if (!title) {
      return alert('Please enter a title');
    }
    this.props.dispatch(
      addDeck({
        [title]: { title: title, questions: [] }
      })
    );
    saveDeckTitle(title);
    this.props.navigation.navigate('DeckView', {
      title: title
    });
  };

  static navigationOptions = {
    title: 'Add Deck'
  };

  render() {
    return (
      <Page>
        <Prompt>Enter new deck title:</Prompt>
        <Input
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
        />
        <TouchableOpacity onPress={this.onSubmitEdit}>
          <Submit>Create Deck</Submit>
        </TouchableOpacity>
      </Page>
    );
  }
}

export default connect()(DeckAdd);
