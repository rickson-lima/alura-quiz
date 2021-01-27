import React from "react";
import { useRouter } from "next/router";

import Widget from "../src/components/Widget";
import Footer from "../src/components/Footer";
import QuizLogo from "../src/components/QuizLogo";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from '../src/components/QuizContainer';
import GitHubCorner from '../src/components/GitHubCorner';

export default function QuizPage() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <QuizBackground backgroundImage="/bg.png">
      <QuizContainer>
        <QuizLogo />
        <Widget>
           <Widget.Header>
            <h1>
               Olá, { name }
            </h1>
           </Widget.Header>
           <Widget.Content>
              <p>Vamos lá!</p>
           </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/rickson-lima" />
    </QuizBackground>
    //  <p>Olá, {name}</p>
  );
}
