import styled from 'styled-components/native';
import { cw, ch } from '~/utils/calculateProportion';

import Image from '~/assets/illustrations/image01.png';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: ${ch(15)}px ${cw(30)}px;
`;

export const Title = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: ${cw(30)}px;
  margin: ${ch(15)}px 0;
`;

export const Illustration = styled.Image.attrs({
  source: Image,
  resizeMode: 'contain',
})`
  height: 30%;
`;
