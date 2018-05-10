import React, { Component } from 'react';
import { TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components';
import navigationOptions from 'react-navigation';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import { addCardToDeck } from '../utils/api';

// Styling

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

const Reminder = styled.Text`
  color: gray;
  font-size: 14;
  text-align: right;
  margin-right: 5;
  margin-top: 5;
`;

// Page where new question and answer pair are entered
// to be added to the deck from which this component is called
class CardAdd extends Component {
  state = { question: '', answer: '' };

  onSubmitEdit = () => {
    const title = this.props.navigation.state.params.item.title;
    const card = { question: this.state.question, answer: this.state.answer };
    this.props.dispatch(addCard(title, card));
    addCardToDeck(title, card);
    this.props.navigation.navigate('DeckView', {
      title: title
    });
  };

  static navigationOptions = {
    title: 'Add Card'
  };

  render() {
    const { question, answer } = this.state;
    return (
      <Page>
        <Prompt>Enter new question:</Prompt>
        <Input
          onChangeText={question => this.setState({ question })}
          value={question}
        />
        <Prompt>and it's answer:</Prompt>
        <Input
          onChangeText={answer => this.setState({ answer })}
          value={answer}
        />
        {!question || !answer ? (
          <Reminder>please enter a question & answer</Reminder>
        ) : (
          <TouchableOpacity onPress={this.onSubmitEdit}>
            <Submit>Submit</Submit>
          </TouchableOpacity>
        )}
      </Page>
    );
  }
}

export default connect()(CardAdd);
