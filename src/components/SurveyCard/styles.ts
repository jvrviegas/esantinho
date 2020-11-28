import styled from 'styled-components/native';

import { cw, ch } from '~/utils/calculateProportion';

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  margin-bottom: ${ch(15)}px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: ${cw(50)}px;
  height: ${cw(50)}px;
  border-radius: ${cw(12)}px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${ch(6)}px 0;
  margin-left: ${cw(15)}px;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: ${cw(12)}px;
  color: #333;
`;

export const Text = styled.Text`
  font-family: 'OpenSans-Semibold';
  font-size: ${cw(14)}px;
  color: #333;
  margin-right: ${cw(5)}px;
`;
