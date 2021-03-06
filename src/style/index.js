import styled from 'styled-components';

// Styling

export const Page = styled.View`
  flex: 1;
`;

export const Prompt = styled.Text`
  color: black;
  font-size: 18;
  text-align: left;
  margin-left: 5;
  margin-top: 5;
`;

export const Input = styled.TextInput`
  height: 40;
  border-color: gray;
  border-width: 1;
  margin: 10px;
  padding: 10px;
`;

export const Submit = styled.Text`
  color: blue;
  font-size: 18;
  text-align: right;
  margin-right: 5;
  margin-top: 5;
`;

export const Reminder = styled.Text`
  color: gray;
  font-size: 14;
  text-align: right;
  margin-right: 5;
  margin-top: 5;
`;

export const Deck = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-top-color: lightgray;
  border-top-width: 2;
  padding-top: 20;
  padding-bottom: 20;
`;

export const Title = styled.Text`
  color: black;
  font-size: 20;
  text-align: center;
`;

export const Enumeration = styled.Text`
  color: grey;
  font-size: 14;
  text-align: center;
`;

export const TitleBox = styled.View`
  margin: 30px;
`;

export const Button = styled.TouchableOpacity`
  background: white;
  border-radius: 3px;
  margin: 30px;
  padding: 30px;
`;

export const ButtonTxt = styled.Text`
  color: black;
  font-size: 16;
  text-align: center;
`;

export const MainPage = styled.View`
  flex: 1;
  padding-top: 30px;
  background-color: white;
`;

export const Header = styled.Text`
  color: black;
  text-align: left;
  margin-left: 5;
  font-size: 22;
`;

export const Plus = styled.Text`
  color: gray;
  margin-right: 5;
  font-size: 36;
`;

export const QuizPage = styled.View`
  flex: 1;
  padding: 2px;
`;

export const QuizTitle = styled.Text`
  color: black;
  font-size: 18;
  text-align: center;
  margin-top: 30;
`;

export const QuizEnumeration = styled.Text`
  color: grey;
  font-size: 14;
  text-align: center;
  margin-bottom: 15;
`;

export const Epart = styled.Text`
  color: grey;
`;

export const Question = styled.Text`
  color: black;
  font-size: 20;
  text-align: left;
  margin-top: 30;
`;

export const Answer = styled.Text`
  color: black;
  font-size: 20;
  text-align: right;
  margin-top: 30;
  margin-bottom: 30;
`;

export const Result = styled.Text`
  color: black;
  font-size: 24;
  text-align: center;
  margin-top: 30;
`;
