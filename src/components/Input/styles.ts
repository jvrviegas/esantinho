import styled from 'styled-components/native';

import { cw, ch } from '~/utils/calculateProportion';

export const Container = styled.View`
  width: 100%;
  height: ${ch(44)}px;
  padding: 0 ${cw(16)}px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: ${cw(10)}px;
  margin-bottom: ${ch(10)}px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #333;
  font-size: ${cw(16)}px;
  font-family: 'OpenSans-Regular';
`;
