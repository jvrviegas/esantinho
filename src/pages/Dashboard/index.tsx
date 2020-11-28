import React from 'react';

import Header from '~/components/DashboardHeader';
import SurveyCard from '~/components/SurveyCard';

import {
  Container,
  Title,
  Subtitle,
  PillsContainer,
  Pill,
  Surveys,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header leftIcon="menu" rightIcon="bell" />
      <Container>
        <Title>Candidatos</Title>
        <Subtitle>Veja os candidatos mais pesquisados</Subtitle>

        <PillsContainer>
          <Pill.Container>
            <Pill.Image
              source={{
                uri:
                  'https://ui-avatars.com/api/?name=Candidato 1&background=F4EFFC&color=A28FD0',
              }}
            />
            <Pill.Text>Candidato 01</Pill.Text>
          </Pill.Container>
          <Pill.Container>
            <Pill.Image
              source={{
                uri:
                  'https://ui-avatars.com/api/?name=Candidato 2&background=F4EFFC&color=A28FD0',
              }}
            />
            <Pill.Text>Candidato 02</Pill.Text>
          </Pill.Container>
        </PillsContainer>
        <PillsContainer>
          <Pill.Container>
            <Pill.Image
              source={{
                uri:
                  'https://ui-avatars.com/api/?name=Candidato 3&background=F4EFFC&color=A28FD0',
              }}
            />
            <Pill.Text>Candidato 03</Pill.Text>
          </Pill.Container>
          <Pill.Container>
            <Pill.Image
              source={{
                uri:
                  'https://ui-avatars.com/api/?name=Candidato 4&background=F4EFFC&color=A28FD0',
              }}
            />
            <Pill.Text>Candidato 04</Pill.Text>
          </Pill.Container>
        </PillsContainer>

        <PillsContainer>
          <Pill.Container>
            <Pill.Image
              source={{
                uri:
                  'https://ui-avatars.com/api/?name=Candidato 5&background=F4EFFC&color=A28FD0',
              }}
            />
            <Pill.Text>Candidato 05</Pill.Text>
          </Pill.Container>
          <Pill.Container>
            <Pill.Image
              source={{
                uri:
                  'https://ui-avatars.com/api/?name=Candidato 6&background=F4EFFC&color=A28FD0',
              }}
            />
            <Pill.Text>Candidato 06</Pill.Text>
          </Pill.Container>
        </PillsContainer>

        <Surveys.Container>
          <Surveys.Title>Pesquisas</Surveys.Title>

          <SurveyCard
            title="Pesquisa 01"
            image="https://www.tegraincorporadora.com.br/Cliente/_arquivos/EmpreendimentoVitrine/294/ImagemPrincipal/e59ee4cf-7f70-4465-a928-aefcbe3842e9.jpg"
            progress={1}
            total={10}
          />
          <SurveyCard
            title="Pesquisa 02"
            image="https://www.tegraincorporadora.com.br/Cliente/_arquivos/EmpreendimentoVitrine/294/ImagemPrincipal/e59ee4cf-7f70-4465-a928-aefcbe3842e9.jpg"
            progress={0}
            total={10}
          />
          <SurveyCard
            title="Pesquisa 03"
            image="https://www.tegraincorporadora.com.br/Cliente/_arquivos/EmpreendimentoVitrine/294/ImagemPrincipal/e59ee4cf-7f70-4465-a928-aefcbe3842e9.jpg"
            progress={3}
            total={10}
          />
          <SurveyCard
            title="Pesquisa 04"
            image="https://www.tegraincorporadora.com.br/Cliente/_arquivos/EmpreendimentoVitrine/294/ImagemPrincipal/e59ee4cf-7f70-4465-a928-aefcbe3842e9.jpg"
            progress={5}
            total={10}
          />
        </Surveys.Container>
      </Container>
    </>
  );
};

export default Dashboard;
