import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, Text } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const OutlineButton: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    <Text>{children}</Text>
  </Container>
);

export default OutlineButton;
