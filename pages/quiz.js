/* eslint-disable radix */
/* eslint-disable react/prop-types */
import React from 'react';
// import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
// import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';

function QuestionWidget({
  question, totalQuestions, questionIndex, questionAnswer, onSubmit,
}) {
  const questionId = `question__${questionIndex}`;
  let userAnswer;
  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <img
        alt="Imagem"
        style={{
          width: '100%',
          height: '250px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>
          &#34;
          {question.description}
          &#34;
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  onClick={(e) => {
                    userAnswer = parseInt(e.target.getAttribute('id').match(/\d+/));
                  }}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button
            type="submit"
            onClick={() => {
              if (userAnswer === questionAnswer) alert('Acertou!');
              else alert('Errou');
            }}
          >
            Confirmar
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>
      <Widget.Content>Carregando...</Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  //   const router = useRouter();
  //   const { name } = router.query;
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const questionAnswer = question.answer;

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage="/bg.png">
      <QuizContainer>
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            questionAnswer={questionAnswer}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns!</div>}
      </QuizContainer>
    </QuizBackground>
  );
}

// pegar qual opção o user clicou
// comparar a opção clicada com a correta
// dar o resultado na tela
