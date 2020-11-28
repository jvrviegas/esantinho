import styled from 'styled-components/native';
import { cw, ch } from '~/utils/calculateProportion';

import Image from '~/assets/illustrations/image02.png';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: ${ch(15)}px ${cw(30)}px ${ch(100)}px;
`;

export const Illustration = styled.Image.attrs({
  source: Image,
  resizeMode: 'contain',
})`
  width: ${cw(300)}px;
  height: ${ch(150)}px;
`;
