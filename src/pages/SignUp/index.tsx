import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '~/components/Button';
import OutlineButton from '~/components/OutlineButton';
import Input from '~/components/Input';

import { Container, Content, Illustration } from './styles';

const SignUp: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Content>
        <Illustration />
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" placeholder="E-mail" />
        <Input name="password" secureTextEntry placeholder="Senha" />
        <Input
          name="confirmPassword"
          secureTextEntry
          placeholder="Confirmar Senha"
        />

        <Button>Cadastrar</Button>
        <OutlineButton onPress={() => navigate('SignIn')}>
          Cancelar
        </OutlineButton>
      </Content>
    </Container>
  );
};

export default SignUp;
