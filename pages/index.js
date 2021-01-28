/* eslint-disable no-restricted-globals */
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import styled from 'styled-components';

// components imports
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

/*
const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;
*/

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h3>
              Bem-vindo(a) ao
              {' '}
              {db.title}
            </h3>
          </Widget.Header>

          <Widget.Content>
            <p>{db.description}</p>

            <form
              onSubmit={function (e) {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Diz aí seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`jogar como
                ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/rickson-lima" />
    </QuizBackground>
  );
}
