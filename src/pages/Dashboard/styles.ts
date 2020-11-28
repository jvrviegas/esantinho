import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { cw, ch } from '~/utils/calculateProportion';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 ${cw(20)}px ${ch(15)}px;
`;

export const Title = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: ${cw(20)}px;
  color: #333;
  margin-bottom: ${ch(5)}px;
`;

export const Subtitle = styled.Text`
  font-family: 'OpenSans-Semibold';
  font-size: ${cw(14)}px;
  color: #333;
  margin-bottom: ${ch(10)}px;
`;

export const PillsContainer = styled.View`
  width: 100%;
  height: ${ch(50)}px;

  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Pill = {
  Container: styled(RectButton)`
    width: 45%;
    flex-direction: row;
    align-items: center;
    padding: ${ch(10)}px ${cw(8)}px;
    border: 1px solid #ddd;
    border-radius: ${cw(16)}px;
  `,
  Image: styled.Image`
    width: ${cw(25)}px;
    height: ${cw(25)}px;
    border-radius: ${cw(5)}px;
  `,
  Text: styled.Text`
    font-family: 'OpenSans-Bold';
    font-size: ${cw(12)}px;
    color: #333;
    margin-left: ${cw(5)}px;
  `,
};

export const Surveys = {
  Container: styled.View`
    flex: 1;
    margin: ${ch(40)}px 0 ${ch(20)}px;
  `,
  Title: styled.Text`
    font-family: 'OpenSans-Bold';
    font-size: ${cw(18)}px;
    color: #333;
    margin-bottom: ${ch(10)}px;
  `,
};

export const Survey = {
  Container: styled(RectButton)`
    flex: 1;
    flex-direction: row;
    background: #cecece;
    margin-bottom: ${ch(15)}px;
  `,
  Image: styled.Image.attrs({
    resizeMode: 'stretch',
  })`
    width: ${cw(50)}px;
    height: ${cw(50)}px;
    border-radius: ${cw(12)}px;
  `,
  Title: styled.Text`
    font-family: 'OpenSans-Bold';
    font-size: ${cw(12)}px;
    color: #333;
    margin-left: ${cw(15)}px;
  `,
};
