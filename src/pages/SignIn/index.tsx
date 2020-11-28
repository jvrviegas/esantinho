import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '~/components/Button';
import Input from '~/components/Input';

import { Container, Content, Title, Illustration } from './styles';

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Content>
        <Title>E-Santinho</Title>
        <Illustration />
        <Input name="email" placeholder="E-mail" />
        <Input name="password" secureTextEntry placeholder="Senha" />
        <Button onPress={() => navigate('SignUp')}>Cadastrar</Button>
      </Content>
    </Container>
  );
};

export default SignIn;
