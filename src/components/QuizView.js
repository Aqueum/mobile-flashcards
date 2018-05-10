import React, { Component } from 'react';
import navigationOptions from 'react-navigation';
import {
  Page,
  QuizPage,
  QuizTitle,
  QuizEnumeration,
  Epart,
  Question,
  Answer,
  Result,
  Button,
  ButtonTxt
} from '../style';

// Quiz increments up through available questions,
// initially shows question only,
// on button-touch shows answer
// & lets user input if they were correct or incorrect
// then repeats for next question
// when no more answers gives results in % and number correct from total
// then options to restart, return to the deck or the homepage
class QuizView extends Component {
  state = {
    page: 0,
    showAnswer: false,
    score: 0
  };

  static navigationOptions = {
    QuizTitle: 'Quiz'
  };

  render() {
    const { page, showAnswer, score } = this.state;
    const { params } = this.props.navigation.state;
    const item = params ? params.item : null;
    const pages = item.questions === undefined ? 0 : item.questions.length;
    return (
      <Page>
        {page < pages ? (
          <QuizPage>
            <QuizEnumeration>
              {page + 1}/{pages}
            </QuizEnumeration>
            <Question>Q: {item.questions[page].question}</Question>
            {showAnswer === true ? (
              <QuizPage>
                <Answer>A: {item.questions[page].answer}</Answer>
                <Button
                  onPress={() => {
                    this.setState({
                      showAnswer: false,
                      score: score + 1,
                      page: page + 1
                    });
                  }}
                >
                  <ButtonTxt>Correct</ButtonTxt>
                </Button>
                <Button
                  onPress={() => {
                    this.setState({
                      showAnswer: false,
                      page: page + 1
                    });
                  }}
                >
                  <ButtonTxt>Incorrect</ButtonTxt>
                </Button>
              </QuizPage>
            ) : (
              <QuizPage>
                <QuizTitle />
                <Button
                  onPress={() => {
                    this.setState({ showAnswer: true });
                  }}
                >
                  <ButtonTxt>Show Answer?</ButtonTxt>
                </Button>
              </QuizPage>
            )}
            <QuizEnumeration>{pages - page - 1} remaining</QuizEnumeration>
          </QuizPage>
        ) : (
          <QuizPage>
            <Result>You scored {Math.round(score / pages * 100)}%</Result>
            <QuizEnumeration>
              ({score} correct from {pages}{' '}
              {pages === 1 ? <Epart>question</Epart> : <Epart>questions</Epart>})
            </QuizEnumeration>
            <Button
              onPress={() => {
                this.setState({
                  showAnswer: false,
                  page: 0,
                  score: 0
                });
              }}
            >
              <ButtonTxt>Restart Quiz</ButtonTxt>
            </Button>
            <Button
              onPress={() => {
                this.props.navigation.navigate('DeckView', {
                  title: item.title
                });
              }}
            >
              <ButtonTxt>Back to Deck</ButtonTxt>
            </Button>
            <Button
              onPress={() => {
                this.props.navigation.navigate('DeckListView');
              }}
            >
              <ButtonTxt>View all Decks</ButtonTxt>
            </Button>
          </QuizPage>
        )}
      </Page>
    );
  }
}

export default QuizView;
