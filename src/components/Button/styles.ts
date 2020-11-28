import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { cw, ch } from '~/utils/calculateProportion';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #35d488;
  border-radius: ${cw(10)}px;
  margin-bottom: ${ch(10)}px;

  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: 'OpenSans-Semibold';
  color: #fff;
  font-size: ${cw(18)}px;
`;
