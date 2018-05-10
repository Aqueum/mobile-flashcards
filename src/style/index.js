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
