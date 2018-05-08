import React, { Component } from 'react';
import { TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components';
import navigationOptions from 'react-navigation';
import { connect } from 'react-redux';
import { saveDeckTitle } from '../utils/api';
import { addDeck } from '../actions';

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

class DeckAdd extends Component {
  state = { title: '' };

  onSubmitEdit = () => {
    const { title } = this.state;
    this.props.dispatch(
      addDeck({
        [title]: title
      })
    );
    saveDeckTitle({ title, title });
    console.log('New deck: ', title);
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
