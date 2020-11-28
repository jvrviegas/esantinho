import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { cw, ch } from '~/utils/calculateProportion';

export const Container = styled.View`
  width: 100%;
  height: ${ch(80)}px;
  padding: ${Platform.OS === 'ios' ? ch(20) : 0}px ${cw(15)}px 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LeftIcon = styled(RectButton)`
  padding: ${cw(5)}px;
  border-radius: ${cw(8)}px;
`;

export const RightIcon = styled(RectButton)`
  padding: ${cw(5)}px;
  border-radius: ${cw(8)}px;
`;

export const CenterContent = styled.View`
  flex: 1;
  background: #999;
`;
