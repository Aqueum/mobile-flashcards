import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
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

class DeckView extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const item = params ? params.item : null;
    return (
      <Page>
        <Title>{item.title}</Title>
        <Enumeration>{item.questions.length} cards</Enumeration>
        <Button>
          <ButtonTxt>Add Card</ButtonTxt>
        </Button>
        <Button
          onPress={() => {
            this.props.navigation.navigate('Quiz', {
              item: item
            });
          }}
        >
          <ButtonTxt>Start Quiz</ButtonTxt>
        </Button>
      </Page>
    );
  }
}

export default DeckView;
