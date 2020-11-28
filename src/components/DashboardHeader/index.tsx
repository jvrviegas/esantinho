import React from 'react';
import { ViewProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { cw, ch } from '~/utils/calculateProportion';

import { Container, LeftIcon, RightIcon, CenterContent } from './styles';

interface HeaderProps extends ViewProps {
  leftIcon: string;
  rightIcon: string;
}

const Header: React.FC<HeaderProps> = ({ leftIcon, rightIcon, children }) => {
  return (
    <Container>
      <LeftIcon>
        {leftIcon && <Icon name={leftIcon} color="#333" size={cw(26)} />}
      </LeftIcon>
      <CenterContent>{children && children}</CenterContent>
      <RightIcon>
        {rightIcon && <Icon name={rightIcon} color="#333" size={24} />}
      </RightIcon>
    </Container>
  );
};

export default Header;
