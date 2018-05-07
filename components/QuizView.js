import React, { Component } from 'react';
import styled from 'styled-components';

const Page = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  color: black;
  font-size: 20;
  text-align: center;
  margin-top: 30;
`;

const Enumeration = styled.Text`
  color: grey;
  font-size: 14;
  text-align: center;
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
            <Title>Q: {item.questions[page].question}</Title>
            {showAnswer === true ? (
              <Page>
                <Title>A: {item.questions[page].answer}</Title>
                <Button>
                  <ButtonTxt
                    onPress={() => {
                      this.setState({
                        showAnswer: false,
                        score: score + 1,
                        page: page + 1
                      });
                    }}
                  >
                    Correct
                  </ButtonTxt>
                </Button>
                <Button>
                  <ButtonTxt
                    onPress={() => {
                      this.setState({
                        showAnswer: false,
                        page: page + 1
                      });
                    }}
                  >
                    Incorrect
                  </ButtonTxt>
                </Button>
              </Page>
            ) : (
              <Button>
                <ButtonTxt
                  onPress={() => {
                    this.setState({ showAnswer: true });
                  }}
                >
                  Show Answer?
                </ButtonTxt>
              </Button>
            )}
          </Page>
        ) : (
          <Title>
            You scored {Math.round(score / item.questions.length * 100)}%
          </Title>
        )}
      </Page>
    );
  }
}

export default QuizView;
