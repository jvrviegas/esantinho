import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Toast from 'react-native-simple-toast';

import Button from '~/components/Button';
import OutlineButton from '~/components/OutlineButton';
import Input from '~/components/Input';

import { Container, Content, Illustration } from './styles';

const SignUp: React.FC = () => {
  const { goBack } = useNavigation();

  const signUp = () => {
    Toast.show('Cadastro realizado com sucesso!');
    goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
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

            <Button onPress={() => signUp()}>Cadastrar</Button>
            <OutlineButton onPress={() => goBack()}>Cancelar</OutlineButton>
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
