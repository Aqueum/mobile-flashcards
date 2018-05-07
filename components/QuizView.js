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
  render() {
    const { params } = this.props.navigation.state;
    const item = params ? params.item : null;
    return (
      <Page>
        <Title>It's a {item.title} Quiz</Title>
      </Page>
    );
  }
}

export default QuizView;
