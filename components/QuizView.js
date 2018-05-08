import React, { Component } from 'react';
import styled from 'styled-components';

const Page = styled.View`
  flex: 1;
  padding: 2px;
`;

const Title = styled.Text`
  color: black;
  font-size: 18;
  text-align: center;
  margin-top: 30;
`;

const Enumeration = styled.Text`
  color: grey;
  font-size: 14;
  text-align: center;
  margin-bottom: 15;
`;

const Epart = styled.Text`
  color: grey;
`;

const Question = styled.Text`
  color: black;
  font-size: 20;
  text-align: left;
  margin-top: 30;
`;

const Answer = styled.Text`
  color: black;
  font-size: 20;
  text-align: right;
  margin-top: 30;
  margin-bottom: 30;
`;

const Result = styled.Text`
  color: black;
  font-size: 24;
  text-align: center;
  margin-top: 30;
`;

const Button = styled.TouchableOpacity`
  background: white;
  border-radius: 3px;
  margin: 30px;
  padding: 30px;
`;

const ButtonTxt = styled.Text`
  color: black;
  font-size: 16;
  text-align: center;
`;

class QuizView extends Component {
  state = {
    page: 0,
    showAnswer: false,
    score: 0
  };
  render() {
    const { page, showAnswer, score } = this.state;
    const { params } = this.props.navigation.state;
    const item = params ? params.item : null;
    return (
      <Page>
        <Title>It's a {item.title} Quiz</Title>
        {page < item.questions.length ? (
          <Page>
            <Enumeration>
              {page + 1}/{item.questions.length}
            </Enumeration>
            <Question>Q: {item.questions[page].question}</Question>
            {showAnswer === true ? (
              <Page>
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
              </Page>
            ) : (
              <Page>
                <Title />
                <Button
                  onPress={() => {
                    this.setState({ showAnswer: true });
                  }}
                >
                  <ButtonTxt>Show Answer?</ButtonTxt>
                </Button>
              </Page>
            )}
            <Enumeration>
              {item.questions.length - page - 1} remaining
            </Enumeration>
          </Page>
        ) : (
          <Page>
            <Result>
              You scored {Math.round(score / item.questions.length * 100)}%
            </Result>
            <Enumeration>
              ({score} correct from {item.questions.length}{' '}
              {item.questions.length === 1 ? (
                <Epart>question</Epart>
              ) : (
                <Epart>questions</Epart>
              )})
            </Enumeration>
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
                this.props.navigation.navigate('Deck', {
                  item: item
                });
              }}
            >
              <ButtonTxt>Back to Deck</ButtonTxt>
            </Button>
            <Button
              onPress={() => {
                this.props.navigation.navigate('Home', {
                  item: item
                });
              }}
            >
              <ButtonTxt>View all Decks</ButtonTxt>
            </Button>
          </Page>
        )}
      </Page>
    );
  }
}

export default QuizView;
