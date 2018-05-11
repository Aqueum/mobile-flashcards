import React, { Component } from 'react';
import { TouchableOpacity, TextInput } from 'react-native';
import navigationOptions from 'react-navigation';
import { connect } from 'react-redux';
import { saveDeckTitle } from '../utils/api';
import { addDeck } from '../actions';
import { Page, Prompt, Input, Submit } from '../style';

// Page where new deck title is entered to create a new deck
class DeckAdd extends Component {
  state = { title: '' };

  onSubmitEdit = () => {
    const { title } = this.state;
    if (!title) {
      return alert('Please enter a title');
    }
    if (this.props.titles.includes(title)) {
      return alert(
        'there is already a deck called "' +
          title +
          '" please enter a unique deck title'
      );
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

const mapStateToProps = state => ({
  titles: Object.keys(state.decks) || []
});

export default connect(mapStateToProps)(DeckAdd);
