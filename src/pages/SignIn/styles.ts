import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { cw, ch } from '~/utils/calculateProportion';

import Image from '~/assets/illustrations/image01.png';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: ${ch(15)}px ${cw(30)}px ${ch(10)}px;
`;

export const Title = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: ${cw(30)}px;
  margin: ${ch(15)}px 0 0;
`;

export const LoginText = styled.Text`
  font-family: 'OpenSans-Semibold';
  font-size: ${cw(20)}px;
  margin: ${ch(15)}px 0;
`;

export const Illustration = styled.Image.attrs({
  source: Image,
  resizeMode: 'contain',
})`
  width: ${cw(300)}px;
  height: ${ch(150)}px;
`;

export const CreateAccountButton = {
  Container: styled.TouchableOpacity`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    border-top-width: 1px;
    border-color: #ddd;
    padding: ${ch(16)}px 0 ${ch(16 + getBottomSpace())}px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  Text: styled.Text`
    color: #333;
    font-family: 'OpenSans-Regular';
    font-size: ${cw(16)}px;
  `,
};
