import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Bar } from 'react-native-progress';

import { cw, ch } from '~/utils/calculateProportion';

import {
  Container,
  Image,
  Content,
  TextContainer,
  Title,
  Text,
} from './styles';

interface SurveyCardProps extends TouchableOpacityProps {
  title: string;
  image: string;
  progress: number;
  total: number;
}

const SurveyCard: React.FC<SurveyCardProps> = ({
  title,
  image,
  progress,
  total,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Image source={{ uri: image }} />
      <Content>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{`${progress}/${total}`}</Text>
        </TextContainer>
        <Bar
          progress={progress / total || 0}
          width={cw(255)}
          height={ch(5)}
          style={{ backgroundColor: '#ddd' }}
          borderWidth={0}
        />
      </Content>
    </Container>
  );
};

export default SurveyCard;
