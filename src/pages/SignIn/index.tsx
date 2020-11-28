import React from 'react';
import { View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '~/components/Button';
import Input from '~/components/Input';

import {
  Container,
  Content,
  Title,
  LoginText,
  Illustration,
  CreateAccountButton,
} from './styles';

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <>
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
              <Title>E-Santinho</Title>
              <Illustration />
              <View>
                <LoginText>Faça seu logon</LoginText>
              </View>
              <Input name="email" placeholder="E-mail" />
              <Input name="password" secureTextEntry placeholder="Senha" />
              <Button onPress={() => navigate('Dashboard')}>Entrar</Button>
            </Content>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton.Container onPress={() => navigate('SignUp')}>
        <CreateAccountButton.Text>Criar uma conta</CreateAccountButton.Text>
      </CreateAccountButton.Container>
    </>
  );
};

export default SignIn;
